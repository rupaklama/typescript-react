
// array
// if array is empty, must declare Type Annotation to prevent - Any
const arr: string[] = [];

// string array with type inference
const carMakers = ['ford', 'toyota', 'chevy'];

// object array with type inference
const dates = [new Date(), new Date()];

// two dimensional arrays
// an array contains array of strings
const carsByMake = [
  ['f150'], ['corolla'], ['camaro']
];
// no values in array
// const carsByMake: string[][] = [];


// Why Typed Arrays?

// TS can do type inference when extracting values from an array
// Help with inference when extracting values
const car1 = carMakers[0]; // ts knows its going to be string - inference
const myCar = carMakers.pop();

// TS can prevent us from adding incompatible values to the array
carMakers.push(10); // adding element that's not String 

// anytime we declare an array, we get lot of help from array build in functions like
// map, forEach & reduce...
carMakers.map((car: string): string => { // func will return string
  return car.toUpperCase();
})

// Flexible types
// arrays can still contain multiple different types with special syntax
// array with two different types, either types value
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('adfdfd');
importantDates.push(new Date());
importantDates.push(100); // error
