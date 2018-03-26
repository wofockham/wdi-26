class StocksController < ApplicationController
  def form
  end

  def lookup
    @stock = params[:stock_symbol].upcase
    info = StockQuote::Stock.quote(@stock)
    redirect_to('/stocks') if info.nil?
    @last_price = info.close
  end
end
