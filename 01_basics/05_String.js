const name = "jay"
const repositoryCount = 50

//String interpolation
console.log(`Hello ${name} and my repositories are ${repositoryCount}`); //use back ticks
//u can also use ${name.ToUpperCase} or any other function

const gameName = new String('hello');

console.log(gameName[0]);//h
console.log(gameName[1]);//e
console.log(gameName.__proto__); //object

console.log(gameName.length);
console.log(gameName.toUpperCase());//but original value will not change, bcoz of stack memory
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

//.trim()
//.trimStart()
//.trimEnd()

const url = "https://hello.com/hey%20hii";
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar bhai')); //false


//substring, slice(start, end {use can give negative value here}) 
//THERE ARE MANY IN-BUILT FUNCTIONS TO USE. go to browser console to see all of that.
//Also see all methods in auto-saggestions.

const newNAME = '123-hello-js';
console.log(newNAME.split('-')); //Output: [ '123' , 'hello' , 'js' ]