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



///////////////////////////////////////////////////////
console.log("2">1); //true
console.log("02">1); //true

//Avoid this types of comparisions in production
console.log(null>0); //false
console.log(null==0);//false 
console.log(null>=0);//true 

//All are false in case of undefined.
//Triple equal === Strict check ->it also checks dataTypes.

console.log( "2" == 2 ); //true
console.log( "2" === 2 ); //false

// Primitive dataTypes - call by value //7: String, Number, Boolean, null, undefined, Symbol, BigInt
// Non-premitive dataTypes - call by reference //Arrays, Objects, Functions
//Here, number is number, not int & float

const id1 = Symbol("123");
const id2 = Symbol("123");
console.log( id1 == id2 ); //false

//const bigNumber = 1354384313431354313543n; //n: bigInt representation //Use 'n' at last of number for storing bigInt

//Objects are in curly braces:
const heros = ["Shaktiman", "Flying Jatt"]; //typeof: => object
let myObject = {
    name:"Jay",
    age:20 //here, in place of value: it can be function, arrays or might be another object.
}

const myFunction = function() {
    console.log("My Code");
}

//-------------Memory------------------//
//Stack(Premitive), Heap(Non-premitive)


//For heap memeory:
let userOne = {
    email: "user@google.com",
    upi: "123"
}
let userTwo = userOne;
userTwo.email = "user2024@gmai.com";

console.log(userOne.email);// "user2024@gmai.com", NOT "user@google.com"
console.log(userTwo.email);// "user2024@gmai.com"

//For Stack memory, the copy of value is transffered, so original value is still older one. not new one.