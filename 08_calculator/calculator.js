const add = function(a,b) {
	let addTwo = 0;
addTwo = a + b ;
  return addTwo ; 
};
console.log(add(0,0))
console.log(add(2,2))
console.log(add(2,6))

const subtract = function(c,d) {
	let sub= 0;
  sub = c  -  d;
  return sub;
};
console.log(subtract(10,4))
console.log(subtract(-10,-4))
console.log(subtract(-8,7))
const sum = function(array1) {
let  sum1 = array1.reduce(add, 0)
return sum1;
  }
;
console.log(sum([]))
console.log(sum([7]))
console.log(sum([7,11]))
console.log(sum([1,3,5,7,9]))
const multiply = function(array2) {
let multiplies = array2.reduce(multiplyTwo);
return multiplies;
};
function multiplyTwo (e,f){

 let  value = e * f ; 
  return value ; 
}
console.log(multiply([2,4]))
console.log(multiply([2, 4, 6, 8, 10, 12, 14]))
console.log(multiply([2,4]))
const power = function(number,powerA) {
	let value = 0; 
  value = Math.pow(number,powerA) ; 
  return value ;
};
console.log(power(4,3))
console.log(power(3,10))

const factorial = function(numberToFacor) {
if (numberToFacor <= 1){
  return 1 ;}
  else {
    return numberToFacor * arguments.callee(numberToFacor-1)
  }
}
;
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))
console.log(factorial(10))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
