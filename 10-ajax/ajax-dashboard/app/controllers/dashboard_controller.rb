class DashboardController < ApplicationController
  def brother
    brother = %w{ Groucho Harpo Chico Zeppo }.sample
    render :plain => brother
  end
end
