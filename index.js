const math = require('./math.js');
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let result = math.add(a,b);
let result2 = math.subtract(a,b);
console.log(` ${a} + ${b} = ${result}`);
console.log(` ${a} - ${b} = ${result2}`);

// console.`laog(process.argv)
