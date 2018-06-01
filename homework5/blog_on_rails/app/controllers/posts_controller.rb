class PostsController < ApplicationController
  before_action :find_post, only: [:edit, :update, :show, :destroy]
  def index
    @posts = Post.order(created_at: :desc)
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to post_path(@post.id)
    else
      render :new
    end
  end

  def show
    if @post.comments
      @comments = @post.comments.order(created_at: :desc)
    end
    @comment = Comment.new
  end

  def edit
  end

  def update
    if @post.update(post_params)
      redirect_to post_path(@post)
    else
      render :edit
    end
  end

  def destroy
    @post.destroy
    redirect_to root_path
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
  def find_post
    @post = Post.find(params[:id])
  end
end
