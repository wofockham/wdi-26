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
  binding.pry
end
