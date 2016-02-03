## Ruby Questions

#### What will val1 and val2 equal after the code below is executed? Explain your answer.

```
val1 = true and false  # hint: output of this statement in IRB is NOT value of val1!
val2 = true && false
```

#### Write a function that sorts the keys in a hash by the length of the key as a string. For instance, the hash:

```
{ abc: 'hello', 'another_key' => 123, 4567 => 'third' }
should result in:

["abc", "4567", "another_key"]
```

#### Explain a ||= b

#### Refactor this
```
# app/models/answer.rb
class Answer < ActiveRecord::Base
  include ActiveModel::ForbiddenAttributesProtection
  belongs_to :completion
  belongs_to :question

  validates :text, presence: true
  def self.for_user(user)
    joins(:completion).where(completions: { user_id: user.id }).last || NullAnswer.new
  end

  def self.most_recent
    order(:created_at).last || NullAnswer.new
  end
end
```
```
# app/models/question.rb
def most_recent_answer_text
  answers.most_recent.try(:text) || Answer::MISSING_TEXT
end
```

```
# app/models/answer.rb
def self.most_recent
  order(:created_at).last
end
```
In another file:
```
# app/models/user.rb
def answer_text_for(question)
question.answers.for_user(self).try(:text) || Answer::MISSING_TEXT
end
```
```
# app/models/answer.rb
def self.for_user(user)
joins(:completion).where(completions: f user_id: user.id g).last
end
```


#### How and why would you refactor this method to use 'tap'?
```
def make_car
   car = Car.create
   car.wheels = 4
   car.move_to_showroom!
end
```
