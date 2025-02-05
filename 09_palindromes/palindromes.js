function reverseString(str){
   
    let result = '';
    for (let i =0; i < str.length ; i++ ){
        result = str.charAt(i) + result ; 
    }
    return result; 
}
function cleanString(str){
const noPunctuation = str.replace(/[.,\/#!$%\^&\*;/\s+/g:{}=\-_`~()]/g, '');
const lowCaser = noPunctuation.toLowerCase();
return lowCaser
}
const palindromes = function (textToCheck) {
  const clean = cleanString(textToCheck)
let reversed = reverseString(clean);

if (reversed === clean){
    return true;
}else {
    return false ;
}
};
console.log(palindromes("racecar"))
console.log(palindromes("racecar!"))
console.log(palindromes('Racecar!'))
console.log(palindromes('A car, a man, a maraca.'))
// Do not edit below this line
module.exports = palindromes;
