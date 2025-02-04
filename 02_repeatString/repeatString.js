function getRandomInt(max) {
    return (Math.random() * max) | 0;
}
const randomNum =getRandomInt(1000);
let number = randomNum;

function repeatString(str ,number){
    let result ='';
    
    
    if ( number > 0 ){
    for (let i =0;i<number ;i++){
        result +=str ;
    }
    return result; 
}else if (number <0 ) {
    const showError= "ERROR";
    return showError ;
}
else if (number === 0){
    return result ;
}else if (number === number ){
   const randomNum =getRandomInt(1000);

     return number;
}else if (str === ''){
    return result ; 
}

}

const repeatedString = repeatString('hey', 3);
console.log(repeatedString);
const repeatedString2 = repeatString('hello', 10);
console.log(repeatedString2);
const repeatedString3 = repeatString('hi', 1);
console.log(repeatedString3);
const repeatedString4 = repeatString('bye', 0);
console.log(repeatedString4);
const repeatedString5 = repeatString('goodebye', -1);
console.log(repeatedString5);

const repeatedString6 = repeatString('odin', number);
console.log(repeatedString6);

const repeatedString7 = repeatString('',10);
console.log(repeatedString7);
// Do not edit below this line
module.exports = repeatString;
