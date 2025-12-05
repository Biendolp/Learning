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

console.log("Starting String: ", stringOne)

for (let i=stringOne.length - 1; i >= 0; i--){
    stringTwo += stringOne[i]
}

console.log("Reversed String: ", stringTwo)