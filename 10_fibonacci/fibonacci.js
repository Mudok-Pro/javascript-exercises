 function fibonacci(num) {
      if (num <0 ) return "OOPS"
    if ( num == 1 ) return 1 ;
    if ( num == 0) return 0 ;

  
    let a = 1 , b = 1 ; 
    for (let i = 2; i < num ; i++){
        let temp = a ; 
        a = b ; 
        b = temp + b ;
    }
    return b;
 }
console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(25));
console.log(fibonacci(0));
console.log(fibonacci(-25));
console.log(fibonacci("0"));
console.log(fibonacci("1"));
console.log(fibonacci("2"));
console.log(fibonacci("8"));

// Do not edit below this line
module.exports = fibonacci;
