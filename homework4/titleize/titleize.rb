string = gets.chomp.split
string.map do |x|
  if x == 'the' or x == 'in' or x == 'of' or x == 'and' or x == 'or' or x == 'from'
    x.downcase
  else
    x.capitalize
  end
end.join(" ")
