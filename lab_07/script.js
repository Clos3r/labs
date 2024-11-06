let balance = 100;

function startGame() {
    while (balance >= 20) {
        balance -= 20;
        console.log(`Game started. Balance: $${balance}`);

        const randomNumber = Math.floor(Math.random() * 5) + 1;
        let guessedCorrectly = false;

        for (let attempts = 1; attempts <= 3; attempts++) {
            let guess = Number(prompt(`Guess a number between 1 and 5 (Attempt ${attempts}/3):`));
            if (guess === randomNumber) {
                guessedCorrectly = true;
                let reward = [40, 20, 10][attempts - 1];
                balance += reward;
                alert(`Correct! You won $${reward}. New balance: $${balance}`);
                break;
            } else {
                alert("Wrong guess, try again!");
            }
        }

        if (!guessedCorrectly) alert(`The number was ${randomNumber}.`);

        if (balance >= 20 && !confirm("Play again?")) break;
    }

    alert("Game over! You don't have enough balance to continue.");
}

startGame();