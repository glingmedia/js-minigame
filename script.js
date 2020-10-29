function miniGame() {
    let questionPrompt = 1;
    if (questionPrompt==1) {
        let question1 = prompt("You are on top of a mountain, what do you want to do?", "'jump' or 'go down'");
        if (question1 !== null) {
            if(question1=='jump') {
            alert('You just died! Why jump?');
        }
        if (question1=='go down') {
            alert('You go down the mountain');
            questionPrompt = 2;
        }
        if (question1 != 'jump' && question1 != 'go down') {
            alert('Wrong input');
        }
    }
    console.log(miniGame);
}