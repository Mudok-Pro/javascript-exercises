function reverseString(str){
   
    let result = '';
    for (let i =0; i < str.length ; i++ ){
        result = str.charAt(i) + result ; 
    }
    return result; 
}
console.log(reverseString('hello'));
console.log(reverseString('hello there'));
// Do not edit below this line
module.exports = reverseString;
