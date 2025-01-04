function sayMyName(){
    console.log("Jay Trivedi");
    
}

//sayMyName; //Reference
sayMyName(); //Execution

function AddTwoNums(num1, num2) {
    console.log(num1+num2);
}

AddTwoNums(); //NaN
const result = AddTwoNums(10,20); //30, result = undefined (because you don't return)
AddTwoNums(10, "20"); //1020


function AddNums(num1, num2) {
    //let result1 = num1 + num2;
    return num1 + num2;
}
console.log("Result: ", result);

function loginMsg(username) {
    if (username === undefined) {
        console.log("Please enter username");
        return
    }
    //or
    if (!username) { //we assume that "", undefined are false
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}


//Give default parameters if user not give,

function loginMsgWithDefaultParam(username = "SAM") {
    // if (username === undefined) {
    //     console.log("Please enter username");
    //     return
    // }
    // //or
    // if (!username) { //we assume that "", undefined are false
    //     console.log("Please enter username");
    //     return
    // }
    return `${username} just logged in`
}


//REST parameters (REST - Operator)
// "..." is rest operator and spread operator also. 
//Shopping Cart problem

function calculateCartTotalPrice(num1){
    return num1
}
console.log(calculateCartTotalPrice(200));//op - 200
console.log(calculateCartTotalPrice(200, 400, 600));//op - 200



function calculate_CartTotalPrice_WithREST(...num1){
    return num1
}
console.log(calculate_CartTotalPrice_WithREST(200));//op - [200] array
console.log(calculate_CartTotalPrice_WithREST(200, 400, 600));//op - [200, 400, 600]




function calculate_CartTotalPrice_WithREST(val1, val2, ...num1){
    return num1
}
console.log(calculate_CartTotalPrice_WithREST(200));//op - [] array
console.log(calculate_CartTotalPrice_WithREST(200, 400, 600, 1000));//op - [600, 1000]



const user = {
    username: "Jay",
    rank: 1
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and rank is ${anyObject.rank}`);
}

handleObject(user);
handleObject({
    username: "Jay",
    rank: 1
})

//This way we can also pass arrays to the function.