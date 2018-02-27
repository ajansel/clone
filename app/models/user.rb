class User < ApplicationRecord
  validates :name, :username, :email, :img_url, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  after_initialize :ensure_session_token

  attr_reader :password

  def ensure_session_token
    self.session_token ||= generate_session_token
  end 

  def generate_session_token
    SecureRandom.urlsafe_base64
  end 

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end 
end
