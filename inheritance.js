When multiple classes share properties or methods, 
they become candidates for inheritance — a tool developers 
use to decrease the amount of code they need to write.

With inheritance, you can create a parent class (also known as a superclass)
with properties and methods that multiple child classes (also known as subclasses)
share. The child classes inherit the properties and methods from their parent class. 

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

//The extends keyword makes the methods of the animal class available inside the cat class.

 //super keyword calls the constructor of the parent class
