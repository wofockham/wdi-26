class PagesController < ApplicationController
  def index
    @brother = %w{ Groucho Harpo Chico Zeppo }.sample
    @time = Time.now
    @uptime = `uptime` # This will not work on Heroku
  end
end
