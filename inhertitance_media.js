class media {
  constructor(ratings) {
    this._title: title,
    this._isCheckedOut: checkedOut,
    this._ratings: ratings,
  }
 
  // Inside the constructor, set the values for Media properties that Book, CD, and Movie share. Prepend all of the property names with an underscore (_).
    
  get title() {
    return this._title;
  }
  get checkedOut() {
    return this._isCheckedOut;
  }
  get ratings() { 
  	return this._ratings;
  	}
    
  toggleCheckOutStatus() {
    if (this._isCheckedOut === true) {
      return false;
    }
    if (this._isCheckedOut === fasle) {
      return true; 
    }
  }
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const lengthOfArray = myArray.length;
      return ratingsSum/lengthOfArray;
    }
    
    addRating(rating) {
      this.ratings.push(rating);
    }
 }
  
 class Book extends Media {
   constructor(title, checkedOut, ratings, author, pages) {
      super(title, checkedOut, ratings),
        this._author: author,
        this._pages: pages
   }
   
   get author() {
     return this._author;
   }
   
   get pages() {
     return this._pages;
   }
 }

class Movie extends Media {
   constructor(title, checkedOut, ratings, director, runTime) {
      super(title, checkedOut, ratings),
        this._director: director,
        this._runTime: runTime
   }
   
   get director() {
     return this._director;
   }
   
   get runTime() {
     return this._runTime;
   }
 }

const historyOfEverything = new Book('A Short History of Everything', '', '', 'Bill Bryson', '544');


//Create a Book instance with the following properties:
//Author: 'Bill Bryson'
//Title: 'A Short History of Nearly Everything'
//pages: 544
//Save the instance to a constant variable named historyOfEverything.

historyOfEverthing.toggleCheckOutStatus();
