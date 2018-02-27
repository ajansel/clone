class Post < ApplicationRecord
  validates :media_type, inclusion: { in: %w(Text Photo Quote Link Chat), 
                                      message: "%{value} is not a valid media type" }
  
  belongs_to :author, 
    primary_key: :id, 
    foreign_key: :author_id,
    class_name: :User
  
  belongs_to :media, 
    polymorphic: true,
    primary_key: :id, 
    foreign_key: :media_id
end
