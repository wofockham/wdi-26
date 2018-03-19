print "What suburb do you live in: "
residence = gets.chomp.downcase

puts case residence
when 'glebe'
  "Beautiful foreshore walk"
when 'greenwich'
  "Cool oil spill!"
when 'fairlight'
  "What a fancy name"
when 'cabramatta'
  "Fine dining and heroin"
else
  "I'm sure that's a very nice part of the world"
end
