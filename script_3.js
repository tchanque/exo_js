var floors = window.prompt("Combien d'étages veux-tu?")

function pyramid(number_floors) {
    for(let count=1; count <=number_floors; count++){
        console.log(" ".repeat(number_floors-count) + "*".repeat(count));
    }
}

pyramid(floors)