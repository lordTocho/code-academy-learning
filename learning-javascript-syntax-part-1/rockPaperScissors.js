
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if( userInput === 'rock'  || 
        userInput === 'paper' ||
        userInput === 'scissors' ) {
          console.log( `User was one of the 3 choices. The choice was ${userInput}` );
          return userInput;
    }
    else {
      console.log( `Invalid input. The input was ${userInput}` );
      return userInput;
    }
};

const getComputerChoice = () => {
  let computerChoice = "";

  switch( Math.floor( Math.random() * 3 ) ) {
      case 0:
            computerChoice = 'rock';
            break;
      case 1:
            computerChoice = 'paper';
            break;
      case 2:
            computerChoice = 'scissors';
            break;
      default:
              console.log( `Invalid input. The input was ${computerChoice}` );
              break;
          
  }
  return computerChoice;
};

function determineWinner( getUserChoiceInput, getComputerChoiceInput ) {
  let message = "########## \n"

  console.log( `User input is ${getUserChoiceInput} Computer input is ${getComputerChoiceInput}` );

  if( getUserChoiceInput === getComputerChoiceInput ) {
    message += "It is a tie!";
  }
  else if( getUserChoiceInput === 'rock'  ) {

    console.log( 'User chose rock' );

    if( getComputerChoiceInput === 'paper' ) {
      console.log( 'Computer chose paper' );
      message += 'Computer won!'
    }
    else {
      console.log( `Computer chose ${getComputerChoiceInput}` );
      message += 'Human won!'
    }
  }
  else if( getUserChoiceInput === 'paper'  ) {

    console.log( 'User chose paper' );

    if( getComputerChoiceInput === 'scissors' || getComputerChoiceInput === 'rock' ) {
      console.log( `Computer chose ${getComputerChoiceInput}` );
      message += 'Computer won!'
    }
    else {
      console.log( `Computer chose ${getComputerChoiceInput}` );
      message += 'Human won!'
    }
  }
  // scissors
  else {
    console.log( 'User chose scissors' );

    if( getComputerChoiceInput === 'paper' || getComputerChoiceInput === 'rock' ) {
      console.log( `Computer chose ${getComputerChoiceInput}` );
      message += 'Computer won!'

    }
    else {
      console.log( `Computer chose ${getComputerChoiceInput}` );
      message += 'Human won!'
    }
  }

  return message;

} // end of function determineWinner
console.log( determineWinner( getUserChoice( 'rock' ) , getComputerChoice() ) );




// console.log( getComputerChoice()