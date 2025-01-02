const score = 400
console.log(score); //400

const bal = new Number(100)
console.log(bal); //[Number: 100]

bal.toString().length;
bal.toFixed(2); // 100.00

const otherNum = 12.89 

otherNum.toPrecision(2) //12.9
otherNum.toPrecision(3) //13 //Look documentation, not sure

const hun = 100000;
hun.toLocaleString('en-IN'); //1,00,000
 
Math.abs(-4)//4
Math.abs(4)//4
Math.round(4.6)//5
Math.ceil(4.2)//5
//.min, .max, .random => 0 to 1 
(Math.random()*10) + 1 //for dice game


//For range:
const min = 10
const max = 20

Math.floor(Math.random() * (max - min + 1)) + min