function multiply5(num){
    //this.num = num;
    return num*5;
}

multiply5.power = 2;

console.log(multiply5(5)); //25
console.log(multiply5.power); //2
console.log(multiply5.prototype); //{}

//So function is also an object.


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){ //defining my new prototype
    this.score++ //this is required here.
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`); //this is required here.
}

const hello = new createUser("hello", 25) //if we use "new" here, it will tell the object that I have some new properties.
const flutter = createUser("flutter", 250)

hello.printMe(); //Done
//flutter.printMe(); //Error


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/