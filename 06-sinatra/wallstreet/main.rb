require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote' # Which I personally fixed, I'm the hero

get '/' do
  erb :home
end

get '/lookup' do
  redirect to('/') if params[:stock_symbol].empty? # Sending rude users back home.

  @stock_symbol = params[:stock_symbol]
  @info = StockQuote::Stock.quote(@stock_symbol)

  redirect to('/') if @info.nil?

  @last_price = @info.close
  erb :lookup
end
