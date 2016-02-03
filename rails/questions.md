## Rails Questions

### Suppose we have a Student with id=”4”. If we delete the Student with id=”4”,
### what will be the result of each of the following queries:

```
Student.find(4)
Student.find_by_id(4)
```

### What paths (HTTP verb and URL) will be defined by the following snippet in config/routes.rb?
```
resources :posts do
  member do
    get 'comments'
  end
  collection do
    post 'bulk_upload'
  end
end
```

### What is/are issue(s) in the controller code below?
```
class CommentsController < ApplicationController
  def users_commentsx
    posts = Post.all
    comments = posts.map(&:comments).flatten
    @user_comments = comments.select do |comment|
      comment.author.username == params[:username]
    end
  end
end
```
