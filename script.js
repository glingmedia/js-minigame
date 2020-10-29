function miniGame() {
    let questionPrompt = 1;
    if (questionPrompt==1) {
        let question1 = prompt("You are on top of a mountain, what do you want to do?", "Jump or Go down")
        if (question1 !== null) {
            if(question1==Jump) {
            alert(You just died! Why jump?);
        }
        if (question1==Go down) {
            alert(You go down the mountain);
            questionPrompt = 2;
        }
        if (question1 != Jump && question1 != Go down) {
            alert(Wrong input);
        }
    }
}

console.log()