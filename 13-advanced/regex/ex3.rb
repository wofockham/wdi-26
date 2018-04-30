# Make a program that prints each line of its input that contains a period (.),
# ignoring other lines of input.

ARGF.each do |line|
  puts line if line =~ /\./ # \ as an escape character
end
