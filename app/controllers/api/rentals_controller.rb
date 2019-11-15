class Api::RentalsController < ApplicationController

  def create
    @rental = Rental.new(rental_params)
    if @rental.save
      redirect_to cat_url(@rental.cat)
    else
      flash.now[:errors] = @rental.errors.full_messages
      render :new
    end
  end


  def new
    @rental = Rental.new
  end


  def show

  end

  private


  def rental_params
    params.require(:rental).permit(:book_id, :member_id, :end_date, :start_date, :status)
  end


end
