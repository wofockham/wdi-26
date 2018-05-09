def factorial_iterative(n)
  result = 1
  while n > 1 # Base case
    result = result * n # (mutation)
    n -= 1 # Move closer to the base case (mutation)
  end
  result
end

def factorial_recursive(n)
  if n > 1 # Recursive case
    n * factorial_recursive(n - 1) # Move closer to the base case
  else
    1 # Base case
  end
end

require 'pry'
binding.pry
