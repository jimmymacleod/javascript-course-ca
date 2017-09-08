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
