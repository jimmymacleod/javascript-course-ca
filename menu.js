const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
 get appetizers() {
   
 },
    set appetizers(appetizerIn) {
      
    },
 get mains() {
   
 },
   set mains(mainsIn) {
     
   },
 get desserts() {
   
 },
    set desserts(dessertsIn) {
      
    },
  },
  
 get courses() {
   retrun {
     appetizers: this._courses.appetizers,
     mains: this._courses.mains,
     desserts: this._courses.desserts,
   }
 },
   
  addDishToCourse (courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  };
  
  // this last line of code is kinda confusing.
   
   getRandomDishFromCourse (courseName) {
     let dishes= this._courses;
     index = Math.floor(Math.random()*dishes.length);
     return dishes[index];
   };
   
   generateRandomMeal(): function() {
     let appetizer = this.getRandomDishFromCourse('appetizers');
     let main = this.getRandomDishFromCourse('main');
     let dessert = this.getRandomDishFromCourse('dessert');
     const totalPrice = appertizer.price + main.price + dessert.price;
       //where do these values come from?
     return 'Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.';
      } 
   } 
};

 menu.addDishToCourse('appetizers', 'Caeser Salad', 4.25);
  menu.addDishToCourse('mains', 'Chciken Wings', 7.25);
  menu.addDishToCourse('mains', 'Burger', 6.25);
  menu.addDishToCourse('mains', 'Steak', 8.25);
  menu.addDishToCourse('appetizers', 'Tuna', 3.25);
  menu.addDishToCourse('dessert', 'Ice Cream', 4.25);
  
  generateRandomMean(menu)= meal;
  
  console.log(meal);
  
