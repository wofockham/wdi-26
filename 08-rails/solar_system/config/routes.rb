Rails.application.routes.draw do
  get '/planets' => 'planets#index' # planets_path
  get '/planets/new' => 'planets#new'
  post '/planets' => 'planets#create' # implicityly planets_path
  get '/planets/:id' => 'planets#show', :as => 'planet' # planet_path
end
