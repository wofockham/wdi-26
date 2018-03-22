require 'pry'

class MarxBrother
  attr_accessor :name, :instrument, :vice # Macro

  def bio
    "My name is #{ @name } and I play the #{ @instrument }"
  end
end

groucho = MarxBrother.new
groucho.name = 'Groucho Julius Marx'
groucho.instrument = 'guitar'
groucho.vice = 'cigars'

# groucho = MarxBrother.new 'Groucho Marx', 'guitar', 'cigars'

binding.pry
