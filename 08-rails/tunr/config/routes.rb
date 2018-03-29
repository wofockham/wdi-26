Rails.application.routes.draw do
  root :to => 'pages#home'
  resources :users, :only => [:new, :create]
  # See rails guide for routing, in particular nested routes
end
