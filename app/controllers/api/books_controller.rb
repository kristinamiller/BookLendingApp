class Api::BooksController < ApplicationController

  def index
    @books = Book.all
    render :index
  end

  def show
    @book = Book.find(params[:id])
    render :show
  end

  def edit
    @book = Book.find(params[:id])
    render :edit
  end

  def update
    @book = Book.find(params[:id])
    if @book.update_attributes(book_params)
      redirect_to book_url(@book)
    else
      flash.now[:errors] = @book.errors.full_messages
      render :edit
    end
  end



end
