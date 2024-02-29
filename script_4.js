const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Les entrepeneurs nés dans les années 70:")
entrepreneurs.forEach( celeb => {
    if (celeb.year >= 1970 && celeb.year <= 1979)
        console.log(celeb);
});

console.log("Voici une array avec le nom et prénom de chaque entrepreneur:")
let namesArray = []
entrepreneurs.forEach( celeb => {
    namesArray.push(celeb.first + " " +celeb.last)
});
console.log(namesArray)

console.log("Voici l'âge qu'aurait chaque entrepreneur en 2024:")
let yearToday = 2024
entrepreneurs.forEach(celeb => {
    let ageToday = yearToday - celeb.year
   console.log(celeb.first + " " + celeb.last + " aurait " + ageToday + " ans aujourd'hui.");
});

console.log("Voici une liste des entrepeneurs triés par ordre alphabétique de leur nom de famille: ")
filteredEntrepeneurs = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last))
filteredEntrepeneurs.forEach(entrepeneur => {
    console.log(entrepeneur.first + " " + entrepeneur.last);
});