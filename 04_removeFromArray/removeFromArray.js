function removeFromArray(array, ...elementsToRemove) {
 
    return array.filter(item => !elementsToRemove.includes(item));
}
console.log(removeFromArray([1,2,3,4],3));
console.log(removeFromArray([1,2,3,4],3,2));
console.log(removeFromArray([1,2,2,3],2));
console.log(removeFromArray([1,2,3,4],7,"tacos"));

// Do not edit below this line
module.exports = removeFromArray;
