class Api::MembersController < ApplicationController

  def index
    @members = Member.all
    render :index
  end

  def show
    @member = Member.find(params[:id])
    render :show
  end


end
