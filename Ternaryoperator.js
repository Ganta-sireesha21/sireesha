// a) Arrow function isEven
const isEven = n => n % 2 === 0;

console.log(isEven(4)); // true
console.log(isEven(7)); // false


// b) Using ternary operator instead of if-else
const marks = 40; 
const result = marks >= 35 ? "Pass" : "Fail";

console.log(result); 


// c) Arrow function greet(name) with ternary operator
const greet = name => `Hello, ${name ? name : "Guest"}`;

console.log(greet("Sam"));    
console.log(greet());        
