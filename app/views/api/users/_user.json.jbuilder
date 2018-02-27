json.extract! user, :id, :name, :img_url, :username
json.posts user.posts.count
# TODO: All the following: 
# json.followers user.followers.count
# json.followees user.followees.count
# if current_user
#   json.followed_by_current_user !!user.followers.find_by(follower_id: current_user.id)
# end