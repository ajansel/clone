class Api::UsersController < ApplicationController
  def index
    # TODO: Filter this as search rather than returning every user
    @user = User.all
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :email, :img_url, :password)
  end
end
