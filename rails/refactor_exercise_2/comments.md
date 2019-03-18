### Theme: https://drivy.engineering/code_simplicity_command_pattern

```ruby
class OrdersController < ApplicationController
  def confirm
    order = current_user.orders.find(params.fetch(:id))
    payment = order.payments.create!(token: params.fetch(:payment_token))

    if payment.amount != order.sales_quote.amount || payment.currency != order.sales_quote.currency
      raise Payment::MismatchError.new(payment, order)
    end

    payment.capture!

    Order.transaction do
      invoice = order.invoices.create!({
        amount: order.sales_quote.amount,
        currency: order.sales_quote.currency,
      })

      @order.sales_quote.items.find_each do |item|
        invoice.items.create!({
          product_id: item.product_id,
          quantity: item.quantity,
          unit_price: item.unit_price,
        })
      end

      order.update(status: :confirmed)
    end

    OrderMailer.preparation_details(order).deliver_async
    OrderMailer.confirmation(order).deliver_async
    OrderMailer.available_invoice(order).deliver_async

    flash[:success] = t("orders.create.success")
    redirect_to invoice_path(invoice)

  rescue Payment::MismatchError
    flash[:error] = t("orders.create.payment_amount_mismatch")
    redirect_to :back

  rescue Payment::CaptureError
    flash[:error] = t("orders.create.payment_capture_error")
    redirect_to :back

  rescue ActiveRecord::RecordInvalid
    flash[:error] = t("orders.create.payment_token_invalid")
    redirect_to :back
  end
end
```
