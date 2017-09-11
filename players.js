let team = {
  _players: [
    {firstName: "Pablo",
    lastName: "Sanchez",
    age: 11},
    {firstName: "Oliver",
    lastName: "Sanchez",
    age: 11},
    {firstName: 'Fred',
    lastName: "Sanchez",
    age: 11},
    {firstName: "Nick",
    lastName: "Sanchez",
    age: 11}
  ],
  _games:[
    {opponent: "Broncos",
    teamPoints: 42,
    opponentPoints: 27},
    {opponent: "Ponies",
    teamPoints: 43,
    opponentPoints: 17},
    {opponent: "SeaEagles",
    teamPoints: 22,
    opponentPoints: 57},
    {opponent: "Cowboys",
    teamPoints: 52,
    opponentPoints: 47}
  ],
  
  get _players() {
    return this._players;
},
	
	get _games() {
    return this._games;
  },
   
addPlayer(firstName, lastName, age) {
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
 
 this.players.push(player);
	},
  
//getting error on this line.
    
};

team.addPlayer('Steph', 'Curry', 44);
team.addPlayer('Lisa','Leslie', 44);
team.addPlayer('Bugs','Bunny',76);

console.log(_players);
