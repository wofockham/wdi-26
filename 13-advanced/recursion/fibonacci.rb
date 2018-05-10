def fibonacci_iterative(n)
  a = 1
  b = 1
  while n > 1
    a, b = b, a + b # Parallel assignment: a = b; b = a + b;
    n -= 1
  end

  a
end

def fibonacci_recursive_slow(n)
  if n == 1 || n == 2
    1
  else
    fibonacci_recursive_slow(n - 1) + fibonacci_recursive_slow(n - 2)
  end
end

def fib(n, a=1, b=1)
  if n == 1 || n == 2
    b
  else
    fib(n-1, b, a+b) # Move closer to the base case
  end
end

require 'pry'
binding.pry
