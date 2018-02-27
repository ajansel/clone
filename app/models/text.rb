class Text < ApplicationRecord
  validates :title, :body, presence: true

  has_one :post,
    as: :media
end
