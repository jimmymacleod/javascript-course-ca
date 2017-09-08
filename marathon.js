let event;
const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };

const getAllEvents()= ['Marathon', 'Triathlon', 'Decathlon'];

const getRandomEvent = () => {
  const allEvents= getAllEvents();
  event = allEvents[Math.floor(Math.random() * allEvents.length)];
};

//returns a random event


const getEventActivities = () => {
  const allEvents = getAllEvents();

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
  const allEvents = getAllEvents();
  if (!allEvents.includes(event)) {
    return null; 
  }
  
  return eventTrainingTimes[event];
};

//returns relevant days to train to event from eventTrainingTimes


getRandomEvent();
console.log('Your event is a ' + event + '. Your event activities consist of ' + getEventActivities() + '. You have ' + getDaysToTrain() +  ' days to train.');
