// annotation is code we add to tell typescript what type of value a variable will refer to
// we developers tell typescript the 'type'
// In simple, Annotation is to declare value type

// first variable declaration with type annotation ': number'
// value of type number to variable 'apples'
let apples: number = 5;

// Type inference - no need of annotation here
let apple = 5;

let speed: string = 'fast';
let hasName: boolean = true;

// here value's name is identical to its type
let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

// type of array that contain strings, array of strings
let colors: string[] = ['red', 'green', 'blue'];

// array of numbers
let myNumbers: number[] = [1, 3, 6, 7];

// array of booleans
let truths: boolean[] = [true, false, true];

// Classes
class Car {
  
}
// referring to instance of a car class
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function Variable Value
// Inside annotation - what different args the function going to take & 
// what different types of value that we expect function to return
// (i: number) => void - number type as args & return type is void
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// NOTE: When to use annotations 

// 1. Must use annotation when a Function returns the 'Any Type' to clarify the value
const json = '{"x": 10, "y": 20}'; // json data type

// parsing above json data into object
// coordinates variable returns value 'ANY TYPE' since JSON.parse returns value of 'ANY TYPE' 
// 'ANY'- meaning no idea about the type & can be any random types like boolean, number, object
// typescript don't know & JSON.parse returns value of 'ANY TYPE' 

// NOTE: To fix this, add in Type Annotation
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates) // { x:10, y:20 }
// NOTE: Avoid variables with 'ANY' at all costs
// coordinates.jkjkljk - Here, typescript don't know we make mistake here

// 2. Adding Annotation manually
let words = ['red', 'green', 'blue'];

// When we declare a variable on one line then initialize it later, will return type - ANY
// let foundWord; // type any

// To fix above, declare & initialize variable on the same line OR add Annotation
let foundWord: boolean; 

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. when we want a variable to have a type that can't be inferred - no auto guessing
// even having declaration & initialization are on the same line. 
let numbers = [-10, -1, 12];

// started with type inference & added Annotation to make it work
// numberAboveZero value is going to be either Boolean or Number
let numberAboveZero: boolean | number = false; // '|' or statement
// NOTE: single variable's value referring to Two Different Types

// to make it this code work, add Annotation above
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
