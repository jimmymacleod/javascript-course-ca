let allEvents;
let event;
const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };

/* this is used a few places and it is vulnerable */ 

// Why are the two vairables up the top of the code not defined? What is their purpose?

const getRandomEvent = () => {
  allEvents = ['Marathon', 'Triathlon', 'Decathlon'];
  event = allEvents[Math.floor(Math.random() * allEvents.length)];
};

//returns a random event


const getEventActivities = () => {
  allEvents = ['Marathon', 'Triathlon', 'Decathlon'];

  if (!allEvents.includes(event)) {
    return null; 
  }
  
  if (event === 'Marathon') {
    const activities = ['Running'];
    return activities.join(', '); 
  } 
  if (event === 'Triathlon') {
    const activities = ['Running', 'Cycling', 'Swimming'];
    return activities.join(', '); 
  } 
  if (event === 'Decathlon') {
    const activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
    return activities.join(', '); 
  }
  
};

//return relevant activities to each event

const getDaysToTrain = () => {
  allEvents = ['Marathon', 'Triathlon', 'Decathlon'];
  if (!allEvents.includes(event)) {
    return null; 
  }
  
  return eventTrainingTimes[event];
};

//returns relevant days to train to event from eventTrainingTimes


getRandomEvent();
console.log('Your event is a ' + event + '. Your event activities consist of ' + getEventActivities() + '. You have ' + getDaysToTrain() +  ' days to train.');
