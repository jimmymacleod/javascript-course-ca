let raceNumber = Math.floor(Math.random()*1000);
let runnerAge = 19 ; 
let runnerEarly = true;
	if (runnerEarly === false) {
		 raceNumber += 1000 ;
  };

	if ((runnerAge >= 18) && (runnerEarly === true)){
    console.log(raceNumber + ', your race will start at 9.30.')
  } ;
	if ((runnerAge >= 18) || (runnerEarly = true)){
    console.log(raceNumber + ', your race will start at 11.00')
  } ;
	if ((runnerAge < 18) && (runnerEarly = false)){
    console.log(raceNumber + ', your race will start at 12.30')
  } ;

// For this exercise I am having trouble getting this step correct;

// "For people who registered early or are over 18 (but not both), log a statement to the console telling them that they will race at 11:00 am. Include their raceNumber."

// I am getting two lines of the output instead of the desired one line.


// Also when I add the else statement, I then get three lines of output:
// 936, your race will start at 9.30. 936, your race will start at 11.00 Return to registration.
