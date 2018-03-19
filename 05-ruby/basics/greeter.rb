# puts "Hello" # Shows output with a new line at the end
# print "Hello" # Just shows the exact output
# p "Hello" # Programmer's print

print "What is your first name? : "
first_name = gets.chomp # Get a string from the keyboard without \n
puts "Your first name is #{ first_name }."

print "What is your surname? : "
surname = gets.chomp
puts "Your surname is #{ surname }."

fullname = "#{ first_name } #{ surname }"

print "What is your address? : "
address = gets.chomp
puts "Your full name is #{ fullname } and you live at #{ address }"
