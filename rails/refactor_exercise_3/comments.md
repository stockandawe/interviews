### Theme: REST anti-pattern

In `routes.rb`:
```ruby
resource :user, only: [:edit, :update] do
  get :edit_password, on: :member
  put :update_password, on: :member
end
```  

```ruby
users#edit_password
users:update_password
```
