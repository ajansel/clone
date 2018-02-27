class Text < ApplicationRecord
  validates :title, :body, presence: true
end
