//  Generics with class
// class that represents simple array of numbers
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

// class that represents simple array of strings
class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

// we can condense both above two classes into ONE with Generics. 
// Defining Generic Class
// By convention, we usually refer argument as T but we can give it a name anything we want
class ArrayOfAnything<T> { // T is custom argument 
  constructor(public collection: T[]) {} // T represents number[] in ArrayOfNumbers

  // returning element of type T from it
  get(index: number): T {
    return this.collection[index]
  }
}

// now if we want to have array of strings
// replacing array of numbers into strings
new ArrayOfAnything<string>(['a', 'b', 'c'])

// same result like above with type inference
const arr = new ArrayOfAnything(['a', 'b', 'c'])



//  Generics with Functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// We can see there's code duplication between both above functions
// Easy way to fix this up by using Generics
// We can create a NEW function, that could receive any types of array
// To specify this is Generic Function, right after its name, add <T>
function printAnyThing<T>(arr: T[]): void {
  // exact same logic like above
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Using above Generic Function to create Array of strings or Array of numbers

// Array of strings
printAnyThing<string>(['a', 'b', 'c']) // string[] - avoid this, not correct way
// type inference, same as above
printAnyThing(['a', 'b', 'c'])

// Array of numbers
printAnyThing<number>([1, 2, 3]) 
