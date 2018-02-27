class Post < ApplicationRecord
  validates :media_type, inclusion: { in: %w(Text Photo Quote Link Chat), 
                                      message: "%{value} is not a valid media type" }
  
end
