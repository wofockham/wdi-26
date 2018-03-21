require 'sinatra'
require 'sinatra/reloader' # Restart the server everytime this file changes.

# Paths / Routes
get '/' do
  "Welcome to the home page"
end

get '/hello' do
  "Hello world!"
end

get '/lucky_number' do
  "Here is your lucky number: #{ rand(1..40) }"
end

get '/uptime' do
  "The server uptime is: #{ `uptime` }"
end

# Dynamic URLs!
get '/fanclub/:name' do
  "#{ params[:name] } is a proud member of the Marx Brothers Fan Club"
end

get '/fanclub/:first/:last' do
  "#{ params[:first] } #{ params[:last].upcase } is a proud member of the Marx Brothers Fan Club"
end

get '/fanclub/:first/:last/:favourite' do
  "#{ params[:first] } #{ params[:last].upcase } is a proud member of the Marx Brothers Fan Club. Their favourite Marx Brother is #{ params[:favourite] }."
end

# Crappy Calculator
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is <strong>#{ result }</strong>"
end

# Problems
# Problem 1. Where is the HTML?
