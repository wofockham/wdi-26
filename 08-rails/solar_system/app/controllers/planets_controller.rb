class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  def show
    @planet = Planet.find params[:id]
  end

  def new
  end

  def create
    planet = Planet.create params[:planet]
  end

  private
  # Return a safe set of parameters (with anything bad taken out)
  def planet_params
  end
end
