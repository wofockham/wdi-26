Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/stocks' => 'stocks#form'
  get '/stocks/lookup' => 'stocks#lookup'

  get '/books' => 'books#form'
  get '/books/lookup' => 'books#lookup'
end
