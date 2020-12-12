// TypeScript introduced a new data type called Tuple. 
// Tuple can contain values of multiple data types.

// drink object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// we can access above with tuple

// A type alias is a shorter name for a type
type Drink = [string, boolean, number];

// Putting above objects values in very specific order, order matters
// if we break orders, our data model completely breaks down

// Annotation ': []' is what makes an array to turn into a tuple
// const pepsi: [string, boolean, number] = ['brown', true, 40]; 
// NOTE: same thing as above using type alias
const pepsi: Drink = ['brown', true, 40]; 
pepsi[0] = 40 // error

// reusing tuple structure with type alias
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['black', false, 0]

// Why Tuples?
// Don't get use on regular basis with typescript since there's no keys for values
// It's not too clear with data model
const carSpecs: [number, number] = [400, 3354];

// same as above but object now with keys
const carStats = {
  horsepower: 400,
  weight: 3354
}
