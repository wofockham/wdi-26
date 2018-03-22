require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# New
get '/butterflies/new' do
  erb :butterflies_new
end

# Create
post '/butterflies' do
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{params[:name]}', '#{params[:family]}', '#{params[:image]}')"
  redirect to('/butterflies') # GET request
end

# Show
get '/butterflies/:id' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id = #{ params[:id] }"
  @butterfly = @butterfly.first # Stripping away the outer array
  erb :butterflies_show
end

# Edit
get '/butterflies/:id/edit' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id = #{ params[:id] }"
  @butterfly = @butterfly.first # Stripping away the outer array
  erb :butterflies_edit
end

# Update
post '/butterflies/:id' do
  query_db "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to("/butterflies/#{ params[:id] }") # GET request
end

# Delete
get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id = #{ params[:id] }"
  redirect to('/butterflies')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement # Optional bonus

  results = db.execute sql_statement
  db.close
  results
end
