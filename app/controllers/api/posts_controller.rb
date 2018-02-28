class Api::PostsController < ApplicationController
  MEDIA_TYPES = ['Text', 'Photo', 'Quote', 'Link', 'Chat']

  def index
    if params[:user_id]
      # Return all of that user's posts
      @posts = Post.where(author_id: params[:user_id])
    else
      # Return all of the posts for the current user's followees
      # TODO: Change this once followers exist
      @posts = Post.all
    end
    render :index
  end

  def create
    @post = Post.new(post_params)

    if MEDIA_TYPES.include?(@post.media_type)
      @media = @post.media_type.classify.constantize.new(media_params)

      if @media.save
        @post.media_id = @media.id
        @post.author_id = 1

        if @post.save
          render :show
        else
          @media.destory
          render json: @post.errors.full_messages, status: 422
        end
      else
        render json: @media.errors.full_messages, status: 422
      end
    else
      render json: ['Invalid media type provided'], status: 422
    end
  end

  def show
    @post = Post.find_by(id: params[:id])
    if @post
      render :show
    else
      render json: ['Post does not exist'], status: 404
    end
  end

  def update
    @post = current_user.posts.find_by(id: params[:id])

    # Post will never need to be updated, only the media itself
    if @post
      if @post.media.update_attributes(media_params)
        render :show
      else
        render json: @post.media.errors.full_messages, status: 422
      end
    else
      render json: ['This is not your post'], status: 401
    end
  end

  def destroy
    @post = current_user.posts.find_by(id: params[:id])
    if @post
      @post.destory
      @post.media.destory
      render :show
    else
      render json: ['This is not your post'], status: 401
    end
  end

  private

  def post_params
    params.require(:post).permit(:media_type)
  end

  def media_params
    params.require(:media).permit(:title, :body, :url, :caption,
                                  :body, :source, :description)
  end
end
