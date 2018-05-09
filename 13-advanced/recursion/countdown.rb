def countdown_iterative(n=10)
  while n >= 0 # Base case
    puts n
    n -= 1 # Move towards the base case : mutation
    sleep 1
  end

  puts "Blast off!"
end

def countdown_recursive(n=10)
  if n < 0 # Base case
    puts "Blast off"
  else
    puts n
    sleep 1
    countdown_recursive(n - 1) # Move towards the base case
  end
end

require 'pry'
binding.pry
