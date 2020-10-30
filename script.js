function miniGame() {

    /**
     *  Question 1
     * */
    let questionPrompt = 1;
    if (questionPrompt==1) {
        let question1 = prompt("Du befinner dig på entreplan i skolan, hur kommer du upp till våning 4?", "hissen eller trappan");
        if (question1 !== null) {
            if(question1=='hissen') {
            alert('Din latmask! Hissen krånglar. Du fastnade och missar hela skoldagen. GAME OVER');
            }
            if (question1=='trappan') {
            alert('Bra val! Lite motion i vardagen kan ju inte skada.');
            questionPrompt = 2;   
            }
            if (question1 != 'hissen' && question1 != 'trappan') {
            alert('Fel val. Välj hissen eller trappan');
            miniGame()
            }
        }
    }

    /**
     *  Question 2
     * */
    if(questionPrompt==2) {
        let question2 = prompt("Du befinner dig vid entredörren på vån 4.", "Vad är koden? Här får du ingen guidning!");
        if (question2 != null) {
            if (question2=='1836') {
            alert('Rätt kod! Du måste nu hitta till sal 7, FED20G:s hemmaplan')
            questionPrompt = 3;
            }
            if (question2 != '1836') {
            alert('Fel kod! Har du inte lärt dig den än? Som straff får du börja om!');
            miniGame()
            }
        }
    }

    /**
     *  Question 3
     * */
    if(questionPrompt==3) {
        let question3 = prompt("Du har nu gått igenom dörren med kodlåset. Åt vilket håll vill du gå?", "vänster, rakt eller höger");
        if (question3 !== null) {
            if(question3=='vänster') {
            alert('Aj aj aj. Du kommer fram till ett kök med massa odiskade kaffemuggar! GAME OVER');
            }
            if(question3=='rakt') {
            alert('Du gick rätt in en informationsdisk och slog i tån! GAME OVER');
            }
            if (question3=='höger') {
            alert('Snyggt jobbat! Du hittade rätt och kom i tid! En utmanande dag väntar...');
            document.getElementById('divbox').style.backgroundImage = "url('win.jpg')";
            // Lägg in getelementbytid här
            }
            if (question3 != 'vänster' && question3 != 'rakt' && question3 != 'höger') {
            alert('Så kan man ju inte skriva! Skriv "vänster", "rakt" eller "höger"');
            }
        }
    }
}