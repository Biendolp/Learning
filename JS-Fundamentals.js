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
