# puts "Starting"

# lines = []
# File.readlines("samples/JavaScript/jquery-1.6.1.min.js").each do |line|
#   lines << line
# end

# puts (lines.inject(0) { |n, l| n + l.length } / lines.length)



str = "white chocolate"
puts str.gsub(/white/).count
