class DashboardController < ApplicationController
  def brother
    brother = %w{ Groucho Harpo Chico Zeppo }.sample
    render :plain => brother
  end

  def time
    render :plain => Time.now
  end

  def uptime
    uptime = `uptime`
    render :plain => uptime
  end

  def info
    brother = %w{ Groucho Harpo Chico Zeppo }.sample
    time = Time.now
    uptime = `uptime`

    render :json => {
      :brother => brother,
      :time => time,
      :uptime => uptime
    }
  end
end
