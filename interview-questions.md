# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer:

Ruby is an object-oriented language. Within the architecture, all data is stored within an object. This object container provides an ability to track the current state and provides both public and private methods to create, read, update, and destroy that state. For example, numbers are tracked within an Integer object or a Float object. Because Ruby does not support type coercion, objects cannot change their type. Instead, a new object would need to be created with a different class to provide comparable behavior and functions.

```ruby
i_m_int = 3
i_m_float = 3.0

p i_m_int / 2
# Prints 1

p i_m_float / 2
# Prints 1.5
```

Ruby implements class inheritance. Children classes inherit state values and methods from their parent class via this inheritance. Within a class definition, locally-scoped variables and methods can be accessed with the @ identifier while inherited properties can be accessed and modified via a call to the parent class using the super() method. For example, we can create a class for rooms that provides a number of doors and windows. We can then create a child class for bathrooms that provides additional states to track the number of sinks. This example also overrites the describe function from the parent to modify behavior.

```ruby
# Create a class for Room objects
class Room
    # Initialize the rooms with default 1 door and 0 windows
    def initialize(doors = 1, windows = 0)
        @doors = doors
        @windows = windows
    end

    # Define a function to describe this room as a string
    def describe
        puts "This room has #{1 == @doors ? 'one door' : @doors.to_s + ' doors'} and #{0 == @windows ? 'no windows' : 1 == @windows: 'one window' : @windows.to_s + ' windows'}."
    end
end

# Create a 
class BathRoom < Room
    # Inherit properties from parent class
    def initialize(doors, windows, sinks)
        Super(doors, windows)
        @sinks = sinks
    end

    # Define a function to describe this room as a string
    def describe
        puts "This room has #{1 == @doors ? 'one door' : @doors.to_s + ' doors'}, #{0 == @windows ? 'no windows' : 1 == @windows: 'one window' : @windows.to_s + ' windows'}, and #{0 == @sinks ? 'no sinks' : 1 == @sinks: 'one sink' : @sinks.to_s + ' sinks'}."
    end
end
```

Researched answer:

2. What is a gem?

Your answer: Ruby provides expansion opportunities through gems. Some gems define classes or functions for use within an application while others provide compatability for interacting with an API. For example, RSpec is a gem that provides additional functions for test-driven development in Ruby and Rails applications. Gems must be imported into the Ruby application and installed into the compiler to provide desired functions. I'll research the syntax for these operations and several useful gems.

Researched answer:

3. What is a relational database? Are there other kinds of databases?

Your answer:

Databases are vast collections of data. As datastructures such as arrays, hashes, and objects expand into hundreds, thousands, millions, etc of elements, the safe and effective use of these data become quite challenging. Databases simplify and improve access by defining methods for the creation, retrieval, update, and destruction of data within the database. For example, each element within the database should be protected from corruption over time or from indesired interaction between different elements in the database. APIs provide language-agnostic commands for interacting with a database. In advanced applications, these databases are stored on geographically distributed servers and need to balance the efficiency for C, R, U, and D operations with different levels of redundancy between servers.

Relational databases recognize the need to store different types of objects that have meaningful relationships. For example, YouTube likely maintains databases to track unique users and databases to store videos for access. Because individual users can both contribute by uploading videos and consume by watching videos, relational databases can provide this cross-functionality. Each video element has_one user who is a creator while each user/creator has_many videos that they have uploaded.

The video elements would add a data column to track the user_id for their creator, providing a foreign id to relate those databases. By searching through the video database, results can be returned where the user_id is the current user, allowing creators appropriate access to manage their owned videos.

Tracking views becomes a bit trickier. Each user can watch a video more than once, and YouTube tracks the index of the location in the video where the user was last watching. It also tracks the total number of views for each video. A separate database for views could provide this sort of functionality. Each view would have_one user and have_one video, while each video would have_many views and each user would have_many views. Adding a new entry for each time a user views a video could be complicated and create significant redundancy in this views database. If this database had values for watch_time, current_index, user_id, and video_id, then creative search algorithms could provide desired functionality while allowing a user to watch a video twice for a watch_time that was twice the video_duration.

Similarly, unique user recommendations and searches must factor the likelihood that a user will click a video based upon their watch history, the popularity of potential presentations, the recency of views for a video, the server(s) where the video is geographically available, load balancing to protect performance in the application for all users...

Relational databases provide an intuitive and efficient way to simplify data organization within minimally necessary databases, organziation of those databases within different servers, and efficient operations for data manipulation. When the dataset is small or consists entirely of unrelated and unique data, then standalone databases could provide the basic functionality needed.

Researched answer:

4. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifies for data within a database. They function like a hash map to ensure that each element within the database is distinct for other elements within the array. For example, creating, reading, updating, or destroying an element should effect only that element. Within a relational database, related databases include a foreign id that tracks the unique id for a related database's primary keys. Within SQL applications, primary keys are integer values that increment based upon the sequence in which elements were added to the database.

Researched answer:

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: HTTP implements five commands to perform CRUD actions. They are:
1. post - creates an element
1. get - reads an element
1. put - updates values for an element
1. patch - updates a value for an element
1. delete - destroys an element

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:

2. Model validations:

3. Params:

4. ERB:

5. API:
