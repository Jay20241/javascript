//Conversion and Operations
let score = "33"

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//number 

//If score="33abc" or score=undefined /=>/ valueInNumber = NaN /=>/ typeof valueInNumber = number
//If score=null; /=>/ valueInNumber = 0 /=>/ typeof valueInNumber = number

//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
//null => 0
//undefined => NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn) //true
// 1 => true
// 0 => false
// "" => false
// "true" or "jay" => true

//SAME WAY, YOU CAN CONVERT /NUMBER/ TO /STRING/ ALSO.