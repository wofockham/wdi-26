# Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.

ARGF.each do |line|
  puts line if line =~ /(\w)\1/ # \w => [a-zA-Z0-9]
end
