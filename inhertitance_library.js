class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title() {
    return this._title;
  }
  
  //return this._title();
  
 //Bit unsure as to how get methods actually work and why.
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  
  get ratings() {
    return this._ratings;
  }
  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  //Help
  
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this.ratings.length;
    return ratingsSum/lengthOfArray;
  }
  
  addRating(rating) {
    return this._ratings.push(rating);
  } 
};

//makes sense up to here!! 

class Book extends Media {
  constructor(author, title, pages) {
    super(title); //Help
    this._author = author;
    this._title = title;
  }
  
  get author() {
    return this._author;
  }
  
  get pages() {
    return this._pages;
  }
};

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  get director() {
    return this._director;
  }
  
  get runTime() {
    if (runTime === number) {return this._runTime;
    } else { return 'no number'}
  }  
};

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

class Cd extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  
  get artist() {
    return this._artist;
  }
  
  get songs() {
    return this._songs;
  }
};

const useMyPhone = new Cd('But You Cant Use My Phone', 'Erykah Badu', ['Hi', 'Cell', 'Dont', 'Jet', 'Bye']);

console.log(useMyPhone.songs);

//Cant get the songs array to work!
