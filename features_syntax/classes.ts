// classes in Typescript with different syntax

// Modifiers are keywords that we can place it inside of different properties & methods of class.
// The goal of these modifiers is to restrict Access to different methods & variables/props. 
// By DEFAULT, all classes have PUBLIC modifier on it.

// vehicle class
class Vehicle {
  // properties
  // color: string = 'red';

  // constructor(public color: string) {
  //   this.color = color;
  // } 

  // The purpose of a 'constructor' is to create an object and 
  // set values if there are any object properties present.
  
  // SHORTER syntax, same as above constructor 
  // using public modifier here, can change it to private or protected also
  constructor(public color: string) {} 

  // methods 
  drive(): void {
    console.log('chugga chugga')
  }

  protected honk(): void {
    console.log('beep')
  }
}

// instance of a class
const vehicle = new Vehicle('orange'); // this will be assign to color prop in constructor
console.log(vehicle.color)

// inheritance on Child Class
class NewCar extends Vehicle {
  // defining it's own props
  constructor(public wheels: number, color: string) { // adding color prop of super class
    super(color); // calling parent constructor with its prop
  }

  // over-ridding default method
  drive():  void { // NOTE: private modifier can't be use with over-ridding method
    console.log('vroom')
  }

  // since it's inside of this class, this can call above method which is private
  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

// instance of a class
const toyota = new NewCar(4, 'red');

// accessing class methods
toyota.startDrivingProcess();

