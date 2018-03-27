class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 234
    @large_number = 4343948
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a.shuffle
    @friend_count = 1
    @enemies_count = 2
    @story = "A very very very very long long long long long time ago in a galaxy far far far far far far away"
  end

  def assets
  end

  def url
  end
end
