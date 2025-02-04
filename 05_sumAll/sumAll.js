const sumAll = function(firstInt,secondInt) {
let result = 0; 
if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)){
    result = 'ERROR';
}
else if (firstInt < 0 || secondInt < 0 ){
    result = 'ERROR';
}
 else if (firstInt > secondInt){
    for (let i=secondInt; i<= firstInt; i++ ){
        result = result + i ;
}}else if (firstInt < secondInt){
    for (let i=firstInt; i<= secondInt; i++ ){
        result = result + i ;
}}
return result ; 
};
console.log(sumAll(1,4))
console.log(sumAll(1,4000))
console.log(sumAll(123,1))
console.log(sumAll(-10,4))
console.log(sumAll(2.5,4))
console.log(sumAll(10,"90"))
console.log(sumAll(10, [90, 1]))

// Do not edit below this line
module.exports = sumAll;
