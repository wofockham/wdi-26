# Modify the previous program to allow Fred to match as well.

ARGF.each do |line|
  puts line if line =~ /[fF]red/
end
