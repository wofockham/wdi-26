require 'pry'

class Actor
  def award_speech
    "I would like to thank my parents"
  end

  def deny_allegations
    "I deny that and I was drunk and I don't remember"
  end
end

class Stooge < Actor
  def terrible?
    true
  end
end

class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice # Macro

  def initialize(name=nil, instrument=nil, vice=nil)
    @name = name
    @instrument = instrument
    @vice = vice
  end

  def bio
    "My name is #{ @name } and I play the #{ @instrument }"
  end
end

# groucho = MarxBrother.new
# groucho.name = 'Groucho Julius Marx'
# groucho.instrument = 'guitar'
# groucho.vice = 'cigars'

groucho = MarxBrother.new 'Groucho Marx', 'guitar', 'cigars'

binding.pry
