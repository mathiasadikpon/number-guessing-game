function runGame() {
  const target = Math.floor(Math.random() * 100) + 1;
  let guessString = "";
  let guessNumber = 0;
  let correct = false;
  let numTries = 0;

  do {
    guessString = prompt(
      "The guessing number is  between 1 and 100 both inclusive \n\n what is your number? "
    );
    guessNumber = +guessString;
    numTries++;
    correct = checkGuess(guessNumber, target);
  } while (!correct);
  alert(
    `Congratualation!\n\n The number was ${target}.\n\n It took you ${numTries} tries to guess it correctly.`
  );
}

function checkGuess(guessNumber, target) {
  let correct = false;
  switch (true) {
    case isNaN(guessNumber):
      alert(
        "You did not enter a number.\n\nPlease enter a number in the 1-100 range."
      );
      break;
    case guessNumber < 1 || guessNumber > 100:
      alert(
        "Your number is out of range.\n\n Please enter a number in the 1-100 range."
      );
      break;
    case guessNumber > target:
      alert("Your number is too large!");
      break;
    case guessNumber < target:
      alert("Your number is too small!");
      break;

    default:
      correct = true;
      break;
  }

  return correct;
}
