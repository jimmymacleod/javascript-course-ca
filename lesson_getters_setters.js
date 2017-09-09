let restaurant = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(seatingCapacity) {
      if (typeOf newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
    } else {
        console.log(`Change ${newCapacity} to a number.`)
    }
  },
  
  //defines if the newCapacity is the right units for the key.

  get seatingCapacity() {
      console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
      return this._seatingCapacity;
  }
}

//logs the key seatingCapacity to the console.

restaurant.seatingCapacity = 150;
const seats = restaurant.seatingCapacity;

// output = restaurant.seatingCapacity = 150;
// const seats = restaurant.seatingCapacity;
