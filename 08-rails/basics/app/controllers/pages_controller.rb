class PagesController < ApplicationController
  def home
    render :home
  end

  def about
    render :about
  end

  def faq
    render :faq
  end

  def lol
    # raise :hell
  end
end
