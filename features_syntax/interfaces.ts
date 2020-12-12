// To fix issue with Long Type Annotations, we are going to create Interface inside this file.
// Defining interface 'Vehicle' with our CUSTOM TYPE, starts with Capital letter
interface Vehicle { // generic name 
  name: string;
  year: Date;
  broken: boolean
  // method
  summary(): string; // description of car
}

// car object
const oldCivic = {
  name:'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

// function to print the props of an object
// void - to define its a Void function which don't return anything 

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
const printVehicle = (vehicle: Vehicle): void => { // now using our CUSTOM TYPE - vehicle interface
  // The issue here is the Long Type Annotations & kind a hard to read with lots of duplicate code. 

  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);

  // instead doing above 
  console.log(vehicle.summary())
}

// function call with object
printVehicle(oldCivic);

// To fix above issue, we are going to create Interface inside this file.
// Interfaces are basically a way to describe data shapes, for example, an object like above. 
// Interface is the 'CUSTOM Type' that we will define.

// 'interface' is use to define structure of an object
