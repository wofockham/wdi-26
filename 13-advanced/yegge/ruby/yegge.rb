# def reverse(str)
#   str.reverse
# end

# Iterative
# def reverse(str)
#   output = ''
#   str.chars.each { |c| output = c + output } # There is an evil solution using reduce()
#   output
# end

# Recursive
def reverse(str)
  if str.empty?
    str # Base case
  else
    str.chars.last + reverse( str[0...str.length - 1] )
  end
end
