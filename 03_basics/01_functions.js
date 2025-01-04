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


//Advance topic - REST parameters