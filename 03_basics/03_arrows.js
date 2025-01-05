//this - shows current context, current scope
const user = {
    username: "jay",
    rank: 1,

    welcomeMsg: function () {
        console.log(`${this.username},  welcome to website`);
        console.log(this); //whole object 'user' will print, with current variables
        
    }
}

user.welcomeMsg(); //jay, welcome to website
user.username = "hitesh"
user.welcomeMsg(); //hitesh, welcome to website

console.log(this); //{} - empty

//--------------------------------------------------------------------//

function chai1() {
    console.log(this); //some object of window
}

function chai2() {
    let username = "jay"
    console.log(this); //some object of window
}

function chai3() {
    let username = "jay"
    console.log(this.username); //undefined
}
//So, "context" is working in objects only, not in functions

//Arrow function

// const chai4 = function () {
//     let usr = "hitesh"
//     console.log(this);   
// }

const chai4 = () => {
    let usr = "hitesh"
    console.log(this); //{}   
}

const addTwo = (num1, num2) => {
    return num1+num2   
}

//Short syntax for one line code (implicit method)
const newFun1 = (num1,num2) => num1+num2
//or
const newFun2 = (num1,num2) => (num1+num2)
//returning object:
const newFun3 = (num1,num2) => ({username: "jay"})

console.log(addTwo(2,2));

// const myArray = [2,3,4,5,6]
// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => (""))