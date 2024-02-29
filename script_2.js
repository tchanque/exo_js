number = window.prompt("De quel nombre veux-tu calculer le factoriel?")
function factorielle(num) {
    if (num == 1)
    {
        return 1;
    }
    return num*factorielle(num-1);
}
result = factorielle(number)

console.log("Le résultat de factoriel " + number + " est " + result)