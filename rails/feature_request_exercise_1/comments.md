### Theme: Not all attributes are created equal

#### Requirement:
As a user, I want to mark a photo as features so it is displayed permanently on my profile.

```ruby
def update
  @photo = current_user.photos.find(params[:id])

  if @photo.update(update_photo_params)
    redirect_to @photo
  else
    render :edit
  end
end

private

def update_photo_params
  params.require(:photo).permit(:caption)
end
```

#### New Requirement
As a user, I should only be allowed to have one featured photo.

#### New Requirement
As a user, if I un-feature a photo, my first photo should be automatically featured.
