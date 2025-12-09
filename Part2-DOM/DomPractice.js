//get document elements
const btnAnimal = document.getElementById("btnAnimal")

//extras
let animalArray = ["Dog", "Cat", "Pig", "Cow", "Pidgeon", "Crow"]

//
btnAnimal.addEventListener('click', function() {
    btnAnimal.innerText = animalArray[Math.floor(Math.random() * 6)]
})