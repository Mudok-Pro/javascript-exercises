const leapYears = function(leapYear) {

 if ( leapYear % 100 === 0 && leapYear % 400 === 0    )  {
    
    return true ;
 }else if ( leapYear % 4 === 0 && leapYear % 100 !== 0  ){
    return true ; 
  } else {
    return false ;
}
};
console.log(leapYears(1996))
console.log(leapYears(1997))
console.log(leapYears(34992))
console.log(leapYears(1900))
console.log(leapYears(1600))
console.log(leapYears(700))

// Do not edit below this line
module.exports = leapYears;
