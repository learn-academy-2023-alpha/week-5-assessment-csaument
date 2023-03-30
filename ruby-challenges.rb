# ASSESSMENT 5: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# Create a function that locates words with a given character from an array of words
# Input: an array containing strings, a string containing a single character
# Output: an array containing strings
# Use .select on the array to create a sub-array
# Within the .select criteria, pass the word parameter through pipes
# Use a conditional statement to check whether the word includes the character
# Use the .include? String method to return a Boolean response whether the character is present
# Output the results with implicit return

def letter_finder(array, char)
      array.select do |word| word.include? char end
end

# Create a test to validate function performance using provided test data
def test1
      # Test data
      beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

      letter_o = 'o'
      # Expected output: ['coffee', 'soda water']
      letter_t = 't'
      # Expected output: ['tea', 'water', 'soda water']

      # Run tests
      p letter_finder(beverages_array, letter_o)
      p letter_finder(beverages_array, letter_t)
end

# Run test
test1

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# Create a method to collapse array values from a hash into a flat array
# Input: a hash
# Output: an array
# Use the built-in method Hash.values to extract all values from the hash
# Use the built-in method Array.flatten to recursively reduce the array of arrays to an array of individual elements
# Use the built-in method Array.sort to sort elements alphabetically

def hash_flattener(hash)
      hash.values.flatten.sort
end

# Create a test to validate function performance using provided test data
def test2
      # Test data
      us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
      # Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

      # Run test
      p hash_flattener(us_states)
end

# Run test
test2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Create a class Bike
# Require model parameter as a string. Allow wheels and speed parameters with default values of 2 and 0, respectively
# Object state remains private
class Bike
      def initialize(model, wheels = 2, speed = 0)
            @model = model
            @wheels = wheels
            @speed = speed
      end

      # Create a method to return a sentence concatenating data regarding the bike object
      # Use logic to provide appropriate formatting for singular/plural wheels
      def bike_info
            "The #{@model} bike has #{@wheels==0 ? 'no wheels' : @wheels==1 ? 'one wheel' : @wheels.to_s + ' wheels' } and is going #{@speed} mph."
      end

      # Create a method to increase the speed with a parameter for the increase
      # Return new speed
      def pedal_faster(speed)
            @speed += speed
      end

      # Create a method to brake
      # Use conditional logic to only allow positive speeds
      # Return new speed
      def brake(speed)
            @speed -= speed
            @speed < 0 ? 0 : @speed
      end
      
end

# Create a test to verify performance
def test3a
      # Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
      my_bike = Bike.new('Trek')
      p my_bike.bike_info
end

# Run test
test3a


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.


# Create a test to verify performance
def test3b
      # Initialize bike object
      my_bike = Bike.new('Trek')

      # Expected output example: my_bike.pedal_faster(10) => 10
      p my_bike.pedal_faster(10)
      # Expected output example: my_bike.pedal_faster(18) => 28
      p my_bike.pedal_faster(18)
      # Expected output example: my_bike.brake(5) => 23
      p my_bike.brake(5)
      # Expected output example: my_bike.brake(25) => 0
      p my_bike.brake(25)

end

# Run test
test3b