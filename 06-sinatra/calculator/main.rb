require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home # HTML file with Embedded Ruby
end

get '/about' do
  erb :about
end

get '/calc' do
  # We have the user's input
  @x = params[:x].to_f
  @y = params[:y].to_f

  # Calculate the result
  @result = case params[:operator]
  when '+' then @x + @y
  when '-' then @x - @y
  when '*' then @x * @y
  when '/' then @x / @y
  end

  # Display the result
  erb :calc
end
