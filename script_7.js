let question = prompt();
console.log("La question est " + question)
function teenReply(question) {
    if (question.slice(-1) === "?") {
        console.log("Ouais Ouais...")
    }
    else if (question==="") {
        console.log("t'es en PLS?")
    }
    else if (question.toUpperCase()===question) {
        console.log("Pwa, calme-toi..." )
    }
    else if (question.includes("Fortnite")) {
        console.log("on s'fait une partie soum-soum ?")
    }
    else {
        console.log("balek")
    }
}

teenReply(question)