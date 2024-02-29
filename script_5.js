const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
// books.forEach(book => {
//     if (book.rented === 0)
//         console.log(book.title + " n'a jamais été emprunté");
// });

function ifAllRented(library){
    for (let i=0; i < library.length; i++) {
        if (library[i].rented === 0) {
            console.log("Il y a au moins un bouquet qui n'a pas été emprunté");
            return false;
        }
    }
    console.log("Tous les livres ont été empruntés au moins une fois");
    return true;
}

ifAllRented(books)

// let maxRented = books[0]
// books.forEach(book => {
//     if (maxRented.rented < book.rented)
//        maxRented = book
// });
// console.log("Le bouquin le plus emprunté est " + maxRented.title);

const maxRentedBook = books.reduce((max, book) => max.rented < book.rented ? book : max);
console.log("Le bouquin le plus emprunté est " + maxRentedBook.title);

const minRentedBook = books.reduce((min, book) => min.rented < book.rented ? min : book);
console.log("Le bouquin le moins emprunté est " + minRentedBook.title);


const myBook = books.find((book) => book.id === 873495);
console.log("Le bouquin avec l'ID 873495 est " + myBook)

const bookToDelete = books.find((book) => book.id === 133712);
console.log("Ce bouquin va être détruit de la BDD " + bookToDelete.title);
const filteredBooks = books.filter(book => book !== bookToDelete )

console.log("Voici la liste des bouquins, sans le dernier" + filteredBooks);

console.log("Voici la liste des bouquins triés par ordre alphabétique: ")
console.log(filteredBooks.sort((a, b) => a.title.localeCompare(b.title)));