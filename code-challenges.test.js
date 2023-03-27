// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe("encodeWords", () => {
      const secretCodeWord1 = "Lackadaisical"
      // Expected output: "L4ck4d41s1c4l"
      const secretCodeWord2 = "Gobbledygook"
      // Expected output: "G0bbl3dyg00k"
      const secretCodeWord3 = "Eccentric"
      // Expected output: "3cc3ntr1c"

      it("takes in a string and returns a string with a coded message", () => {
            expect(encodeWords(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
            expect(encodeWords(secretCodeWord2)).toEqual("G0bbl3dyg00k")
            expect(encodeWords(secretCodeWord3)).toEqual("3cc3ntr1c")
      })
})

// ReferenceError: encodeWords is not defined

// b) Create the function that makes the test pass.

// Create a function that modifies strings by replacing specified letters with alternate characters
// Input: a string
// Output: a string
// Create arrays for new map of characters - use regex for each original character to maintain [g]lobal scope with case [i]nsensitivity
// Use .map to iterate across array of substitutions
// Chain .replace calls to replace each character with its alternative
// Return the new string
// Ignore inefficiency of multiple passes through the string because the strings are short

const encodeWords = (string) => {
      let oldChar = [/a/gi, /e/gi, /i/gi, /o/gi]
      let newChar = ['4', '3', '1', '0']
      oldChar.map((v, i) => string = string.replace(oldChar[i], newChar[i]))
      return string
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.463 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.10s.

// Generate a RegEx to map characters to their substitution
// Use .replace with global scope and case insensitivity to replace each occurance of each character
// Take a break from using a complicated regex with a single replace call - it looks like it only maps to replace any character/s with a single string vice mapping in a unique hash

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("findLetter", () => {
      const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

      const letterA = "a"
      // Expected output: ["Mango", "Apricot", "Peach"]
      const letterE = "e"
      // Expected output: ["Cherry", "Blueberry", "Peach"]
      it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
            expect(findLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
            expect(findLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
})
})

//     ReferenceError: findLetter is not defined

// b) Create the function that makes the test pass.

// Create a function to filter an array to elements containing a provided string
// Input: an array, a string
// Output: an array
// Use .filter method on the array to return a subset of the initial filter
// Use .search method on each element of the array to determine if the provided string is present
// Create a new RegExp object using the string and case [i]nsensitivity
// Return the element when the string is found (.search returns positive value)
const findLetter = (arr, str) => {
      return arr.filter(word => word.search(new RegExp(str, 'i')) >= 0)
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.454 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.39s.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouseCheck", () => {
      const hand1 = [5, 5, 5, 3, 3]
      // Expected output: true
      const hand2 = [5, 5, 3, 3, 4]
      // Expected output: false
      const hand3 = [5, 5, 5, 5, 4]
      // Expected output: false
      const hand4 = [7, 2, 7, 2, 7]
      // Expected output: true
it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
      expect(arrHash(hand1)).toEqual(true)
      expect(arrHash(hand2)).toEqual(false)
      expect(arrHash(hand3)).toEqual(false)
      expect(arrHash(hand4)).toEqual(true)
})
})

// ReferenceError: fullHouseCheck is not defined

// b) Create the function that makes the test pass

// Create a function to check if a hand has full house
// Input: an array of five card values
// Output: a boolean response
// Problem doesn't state whether royal cards are string/characters or number values; initially treat them as values with option to refactor (J = 11, Q = 12, K = 13, A = 14)
// Initially ignore the Joker card with the option to refactor
// Use .reduce with a sparse array in the accumulator to count the occurences of each number in the hand (ie a hash map)
// Use a .filter to remove non-number values
// When max value in the array is 3 and min non-nil value in the array is 2, then there is a full hand

const fullHouseCheck = (hand) => {
      counts = hand.reduce((acc, card) => {
            acc[card] = acc[card] + 1 || 1
            return acc
      }, Array(15)).filter(count => count)
      return Math.min(...counts) === 2 && Math.max(...counts) === 3
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.579 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.08s.

// Alternate method using a Hash Map to track the counts of each value from the hand
// Create a hashmap to track counts of each value
// key = card number
// value = count of each card with that value
// Iterate accross the hand, updating the hash map
// Cast the object into an array of values, flatten the values, and find the min and max card counts
// Return true when there are two of one card and three of another
// Otherwise return false

const fullHash = (hand) => {
      let acc = {}
      hand.forEach(card => acc[card] = acc[card] ? acc[card] + 1 : 1)

      return 3 === Math.max(...Object.values(acc))  && 2 === Math.min(...Object.values(acc)) ? true : false
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.575 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.38s.

// Single test shows that hashmaps with .reduce's accumulator are potentially more efficient than implementation with an object. Let's try a sparse array.

const arrHash = (hand) => {
      let acc = []
      hand.forEach(card => acc[card] = acc[card] ? acc[card] + 1 : 1)
      acc = acc.filter(count => count)
      return 3 === Math.max(...acc)  && 2 === Math.min(...acc) ? true : false
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.434 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.96s.

// Single test shoes some improvement over object-based implementation and marginal improvement over .reduce implementation.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.453 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.63s.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.304 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.93s.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.272 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.89s.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.258 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.86s.

// Repeating the test suite show log improvements to runtime. This indicates some sort of memoization by the testing environment or raw javascript.