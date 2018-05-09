def fibonacci_iterative(n)
  a = 1
  b = 1
  while n > 1
    a, b = b, a + b # Parallel assignment: a = b; b = a + b;
    n -= 1
  end

  a
end

def fibonacci_recursive(n)
  # Homework
end

require 'pry'
binding.pry
