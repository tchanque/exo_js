const proteinHash = {
    "UCU": "Sérine",
    "UCC": "Sérine",
    "UCA": "Sérine",
    "UCG": "Sérine",
    "AGU": "Sérine",
    "AGC": "Sérine",
    "CCU": "Proline",
    "CCC": "Proline",
    "CCA": "Proline",
    "CCG": "Proline",
    "UUA": "Phénylalanine",
    "UUG": "Phénylalanine",
    "CGU": "Arginine",
    "CGC": "Arginine",
    "CGA": "Arginine",
    "CGG": "Arginine",
    "AGA": "Arginine",
    "AGG": "Arginine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine"
}

let arn = prompt("Quelle est la série d'ARN?", "CCGUCGUUGCGCUACAGC");
let arnLength = arn.length - (arn.length % 3);
let arnSequence = [];

for(let i=0; i < arnLength; i += 3){
    arnSequence.push(arn.slice(i, i+3));
}
console.log("La séquence à traduire est " + arnSequence)

let proteinSequence = [];
arnSequence.forEach(bit => {
    proteinSequence.push(proteinHash[bit])
});

console.log("La séquence de protéines est la suivante: " + proteinSequence)