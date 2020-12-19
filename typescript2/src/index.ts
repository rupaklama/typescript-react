// we can create alias for 'named' export - multiply 
import multiplyByTwo, { multiply as mul, HelloWorld } from './multiply';

const a = 5;
const b = 2;

console.log(`${a} * ${b} = ${mul(a, b)}`);
console.log(multiplyByTwo(2))
