let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello: function() {
    return 'Hello, my name is ' + this.name;
  },
  
  //sayHello() {
  //return `${this.name} says hello!`;
  //}
  
  sayGoodbye() {
    return 'Goodbye!';
  }
  
};

let friend = {
   name: 'josh',
   };
   
friend.sayHello= person.sayHello;

console.log(person.sayHello());

person.hobbies = ['Basketball', 'Coaching'];
person.hobbies = 'Basketball';
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

console.log(friend.sayHello());

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
