# Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

ARGF.each do |line|
  puts line if line =~ /fred/ && line =~ /wilma/ # /(fred.wilma|wilma.*fred)/
end
