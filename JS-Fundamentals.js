// JS Fundamentals practice

// Find largest and smallest number in array

let numbers = [1, 100, 30, 204, 6, 35, 76, 3546, 34, 300, 1, -13, -100000]
let temp = numbers[0]

//Largest number
for (const item of numbers) {
  if (item > temp) {
      temp = item;
    }
}

console.log("Largest: ", temp)

//Smallest Number
for (let i=0; i < numbers.length; i++){
 if(numbers[i] < temp) temp = numbers[i];
}

console.log("Smallest: ", temp)


// Reverse a string

let stringOne = "sdrawkcaB sI gnirtS sihT"
let stringTwo = ""
let stringThree = "gnirtS sdrawkcaB rehtonA"
let stringFour = ""

console.log("Starting String: ", stringOne)

//Simple reverse using basic fundamentals
for (let i=stringOne.length - 1; i >= 0; i--){
    stringTwo += stringOne[i]
}

console.log("Reversed String: ", stringTwo)

console.log("Starting String 2: ", stringThree)

//More complex reverse using built in JS functions.
stringFour = stringThree.split("").reverse().join("")

//.split("") Turns string into array, each letter being an index
//.reverse() reverses the array
//.join("") Turns the indexed items in the array together into one, starting from index 0 -> the end

console.log("Reversed String 2: ", stringFour)
console.log("")


// Learning Objects

let movie = {
  title: "",
  director: "",
  year: 0,
  rating: 0,
}

// 1. Fill object
movie.title = "Lord of the Rings"
movie["director"] = "Dwayne, The Rock, Johnson"
movie.year = 2001
movie["rating"] = 9.7

// 2. Add watched property
movie["watched"] = true

// 3. Rating conditional
function CheckRating(){
  if (movie["rating"] >= 7){
    console.log("This is a good movie")
  } else {
    console.log("Might not be the best movie")
  }
}

// 4. Update rating function (maybe)
function UpdateRating(newRating){
  if(isNaN(newRating)){
    console.log("Wrong Data type, Set rating to a #")
  } else {
    movie.rating = newRating
  }
}

//Log base object
console.log(movie)
CheckRating()
console.log("")

//log updated rating and check rating
UpdateRating(5.7654)
console.log(movie)
CheckRating()
console.log("")

//log with bad rating update (works, doesnt change rating if not a number)
UpdateRating("John")
console.log(movie)
CheckRating()