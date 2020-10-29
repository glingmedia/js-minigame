function miniGame() {
    let questionPrompt = 1;
    if (questionPrompt==1) {
        let question1 = prompt("Du befinner dig på entreplan i skolan, hur kommer du upp till våning 4?", "'hissen' or 'trappan'");
        if (question1 !== null) {
            if(question1=='hissen') {
            alert('Din latmask! Hissen krånglar. Du fastnade och missar hela skoldagen... GAME OVER');
        }
        if (question1=='trappan') {
            alert('Bra val! Lite motion i vardagen kan ju inte skada...');
            questionPrompt = 2;
        }
        if (question1 != 'hissen' && question1 != 'trappan') {
            alert('Fel fel fel. Välj hissen eller trappan');
        }
    }
    }
}

    if(questionPrompt==2) {
        let question2 = prompt("Du befinner dig vid entredörren på vån 4.", "Vad är koden? Här får du ingen guidning")
        if (question2 != null) {
            if (question2=='1836') {
                alert('Rätt kod!')
            }
        }
    }

 