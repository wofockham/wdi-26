# Make a program that prints each line of its input that mentions fred.

ARGF.each do |line|
  puts line if line =~ /fred/
end
