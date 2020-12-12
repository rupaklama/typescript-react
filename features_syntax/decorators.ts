// Decorators are Functions that can be used to modify/change/anything different properties &
// methods in the class. Not the same as Javascript decorators. 

class Boat {
  color: string = 'red';

  // getter/accessor
  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  // method
  // adding decorator here but we need to do some configuration 
  // we need to add create 'tsconfig' file
  @testDecorator
  pilot(): void {
    console.log('swish')
  }
}

// we can create Decorators & apply it on all props & methods of above class
// first arg is something that we always name - 'target' with type 'Any'
// second arg is something call 'key' with type 'string'
function testDecorator(target: any, key: string): void {
  console.log('Target:', target)
  console.log('Key:', key)
}

// now we need to apply the decorator inside of our above class
