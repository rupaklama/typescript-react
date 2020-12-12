// Function 
// Inside annotation - what different args the function going to take & 
// what different types of value that we expect function to return
// = (i: number) => { console.log(i) }

// type annotations with functions
// (a: number, b: number): number - missing function value return annotation 
// to create Type inference here - typescript auto guesses what value type gets return
const add = (a: number, b: number) => { // args & return value
  return a + b;
};

// NOTE: Always use ': number' - function value return annotation to prevent bugs/errors
const subtract = (a: number, b: number): number => {
  return a - b;
};


// keyword function - regular function
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function / function expression
const multiply = function(a: number, b: number): number {
  return a * b;
}

// void function
// void - to define this function is Void Function & no value will be returned
const logger = (message: string): void => { 
  console.log(message)
  // return 'abdfd';  // this is an error
};

// never function 
// anytime we throw error, function will technically not actually return anything so
// to indicate that or to do so add ': never' type annotation to NOT to return anything ever
const throwError = (message: string): never => {
  throw new Error(message)
}

// DESTRUCTURING with Annotations
// object
const forecast = {
  date: new Date(),
  weather: 'sunny'
}
// function using above object 
const logWeather = (forecast: { date: Date, weather: string }): void => {
  // only logging out the weather, not returning anything else 
  // so marking return type - void 
  console.log(forecast.date);
  console.log(forecast.weather);
}

// ES2015/ES6
// DESTRUCTURING with Annotations, same function above - { date, weather }
const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
  // only logging out the weather, not returning anything else 
  // so marking return type - void 
  console.log(date);
  console.log(weather);
}

// func calls
logWeather(forecast); 
logWeather2(forecast); 
