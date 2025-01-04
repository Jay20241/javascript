var c = 300
d = 400


if (true){
    let a = 10
    const b = 20
    var c = 30
    d = 40 //It is "var" internally
}

//console.log(a); //error
//console.log(b); //error
console.log(c); //30 - so not use "var" in production code.
console.log(d); //40 - default is "var"

//IMP-NOTE: GLOBAL IS SCOPE IS DIFFERENT IN WINDOWS(BROWSER-->INSPECT-->CONSOLE) & DIFFERENT IN IDE(CODE-ENVIRONMENT)