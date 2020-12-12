
// object
const profile = {
  name: 'alex',
  age: 20,
  coords:  {
    lat: 0,
    lng: 15
  },
  // ES6 syntax 
  // void - void function
  setAge(age: number): void {
    this.age = age
  }
};

// ES2015/ES6
// DESTRUCTURING with Annotations to pull out different objects properties
// const age = profile.age;
// const { age } = profile;
const { age, name }: { age: number; name: string } = profile; // with type annotation

// nested object destructuring 
// const { coords: { lat, lng } } = profile;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number }} = profile; // with type annotation
