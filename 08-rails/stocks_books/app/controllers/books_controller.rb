class BooksController < ApplicationController
  def form
  end

  def lookup
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:title] }"
    info = HTTParty.get book_url
# Type actual books in, idiot
#    redirect_to('/books') if info["items"].nil?
    @cover = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  end
end
