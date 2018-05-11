major_cities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"]}

major_cities.each do |key, value|
  puts "#{key} has #{value.length} main cities: #{value.slice(0, value.length - 1).join(', ') + " and " + value.last.to_s}"
end
