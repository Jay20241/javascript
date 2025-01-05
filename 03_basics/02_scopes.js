var c = 300
d = 400


if (true){
    let a = 10
    const b = 20
    var c = 30
    d = 40 //It is "var" internally
    console.log("Inner a: ", a);
}

//console.log(a); //error
//console.log(b); //error
console.log(c); //30 - so not use "var" in production code.
console.log(d); //40 - default is "var"

//IMP-NOTE: GLOBAL IS SCOPE IS DIFFERENT IN WINDOWS(BROWSER-->INSPECT-->CONSOLE) & DIFFERENT IN IDE(CODE-ENVIRONMENT)

////////////////////// Video - 22 /////////////////////////
//Nested Scope

//Nested functions
function one(){
    const username = "jay"
    
    function two(){
        const website = "wordpress"
        console.log(username);
    }

    //console.log(website); //error
    
    two() //jay
}

one()//if we comment line 33,then no output. 
//RULE - bachche log bado se icecream le sakte he, par bade log bachcho se icecream nahi le sakte
//Same concept for nested-if condition.

//            Interesting            //

console.log(addOne(5)) //6
function addOne(num) {return num+1}
addOne(5)//6


//Hoisting, Execution-Context CONCEPT - TAUGHT LATER
//console.log(addTwo(5)) //ERROR
const addTwo = function (num) { //Here, In JS, variable can hold anything.
    return num+2
}
addTwo(5) //6