Rails.application.routes.draw do
  root :to => 'pages#index'

  # API endpoints
  get '/brother' => 'dashboard#brother'


end
