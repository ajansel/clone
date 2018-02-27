# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Text.destroy_all

jonsnow = User.new(name: "Jon Snow", username: "jonsnow", email: "jonsnow@gmail.com", img_url: "https://cdn.pixabay.com/photo/2016/10/21/14/46/norway-1758183_1280.jpg", password: "password")
danny = User.new(name: "Danny", username: "danny", email: "danny@gmail.com", img_url: "https://cdn.pixabay.com/photo/2016/10/21/14/46/norway-1758183_1280.jpg", password: "password")
jonsnow.save! 
danny.save! 

text1 = Text.new({ title: "Sample Post", body: "Hello World Part 1" })
text2 = Text.new({ title: "Another Sample Post", body: "Hello World Part 2" })
text3 = Text.new({ title: "Trying again", body: "Hello World Part 3" })
text1.save!
text2.save!
text3.save!

post1 = Post.new({ author_id: jonsnow.id, media_type: Text, media_id: text1.id })
post2 = Post.new({ author_id: jonsnow.id, media_type: Text, media_id: text2.id })
post3 = Post.new({ author_id: danny.id, media_type: Text, media_id: text3.id })
post1.save! 
post2.save! 
post3.save! 
