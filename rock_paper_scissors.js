const getUserChoice = (userInput) => {

  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {

  return userInput;

  } else {

    console.log('Error!');

  }

}



function getComputerChoice() {

  let randomNumber= 

      Math.floor(Math.random * 3);

  switch (randomNumber) {

    case 0:

      return 'rock';

    case 1:

      return 'paper';

    case 2:

      return 'scissor';

    }

}



function determineWinner = (userChoice, computerChoice) => { 

  if (userChoice === computerChoice) {

    return = 'It was a tie';

  }

  if (userChoice === 'rock'){

    if (computerChoice === 'scissors'){

      return 'The computer won';

    } else {

        return 'You won';

      }

    }

  if (userChoice === 'paper'){

    if (computerChoice === 'rock'){

      return 'You won';

    } else {

      return 'The computer won';

   		 }

 		 }

  if (userChoice === 'scissors'){

    if (computerChoice === 'paper'){

      return 'You won';

    } else {

      return 'The computer won';

   		 }

 		 }

  }



const playGame = () => {

    const userChoice = getUserChoice('scissors');

    const computerChoice = getComputerChoice();

  console.log('You threw: ' + userChoice);

    console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));

}


playgame();



// ttps://www.codecademy.com/courses/learn-javascript-iterators/lessons/javascript-iterators/exercises/choose-iterator?action=lesson_resume&program_content_id=0f24b3b442e0547eb392c75cea0e6efe&program_id=fc1cc76cbdee0831fda0677e3fd75ae6
// //  Choose a method that will return undefined

// cities.forEach(city => console.log('Have you visited ' + city + '?'));
// ^^^^ This logged the sentences to the program when the program wanted 'undefined' to be logged




