// singleton
// Object.create //this is constuctor method



//two ways to declare the objects : 
//1. Literal way (Not singleton)
//2. Constructor way (Singleton)

// object literals

const mySym = Symbol("key1")


const JsUser = {
    1: "key can be anthing, but it is internally a string",
    name: "Jay",
    "full name": "Jay Trivedi",
    mySym: "myValue", //This is a normal String Key
    [mySym]: "mykey1", //But this key is Symbol.
    age: 18,
    location: "Jaipur",
    email: "jay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //Not to use
// console.log(JsUser["email"]) //always use []&""
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "jay@chatgpt.com"
// Object.freeze(JsUser) //Now you can't assign new values in it.
JsUser.email = "jay@microsoft.com" //It will not show error, but this line is not executed becoz Our object is freeze now.
// console.log(JsUser);


//In JS, Functions can be treated as variable declaration
JsUser.greeting = function(){ //YOU CAN NOT USE FUNCTIONS, IF MY OBJECT IS FREEZE.
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); //*undefined IF FREEZE, //FUNCTION(ANONYMOUS) IF NOT FREEZE

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//* - one undefined is automatically execute without console.log. 
//We will discuss it later.