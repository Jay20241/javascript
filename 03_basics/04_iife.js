//IIFE - Immediately Invoked Function Expression
//Uses:
//1:-We need that when my app is started, immediately make connection to the database.
//2:-Global scope pollute: Some unwanted global variable affect inside function.

//---------"SEMICOLON IS MUST TO USE AFTER IIFE FUNCTION."--------------//

//Traditional way:
function chai(){
    console.log(`DATABASE Connected`);
}
chai();

//IIFE Method: Which is safe from Global scope pollution
(function chai(){ //It is named IIFE
    console.log(`DATABASE Connected`);
})();
//SEMICOLON IS MUST TO USE IN IIFE FUNCTION.

( () => { //It is un-named IIFE
    console.log(`DATABASE Connected`);
})();
//SEMICOLON IS MUST TO USE IN IIFE FUNCTION.

//()() //Here, first paranthesis is where we write function defination & second paranthesis is for execution. chai() => (chai)() like this.


//with parametes: 
( (name) => { //It is also un-named IIFE
    console.log(`DATABASE Connected ${name}`);
})('Jay');
