class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('created_at DESC') # This is faster than Fruit.all.reverse
    respond_to do |format|
      format.html {} # This empty block means Rails should follow its default behaviour.
      format.json { render :json => @fruits }
    end
  end

  def create
    @fruit = Fruit.new fruit_params # new fruit in memory only
    if @fruit.save
      redirect_to @fruit
    else
      render :new
    end
  end

  def show
    render :plain => 'something about fruit'
  end

  private
  def fruit_params
    params.require(:fruit).permit(:name)
  end
end
