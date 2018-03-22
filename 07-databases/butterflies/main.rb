require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index
get '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  @butterflies = db.execute 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# Show
get '/butterflies/:id' do
  # Fetch this butterfly from the database
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  @butterfly = db.execute "SELECT * FROM butterflies WHERE id = #{ params[:id] }"
  # Show this butterfly

  erb :butterfly_show
end
