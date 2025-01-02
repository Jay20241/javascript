const myArry = [0,1,2,true,"hello", [1,2,3] ] //Copy the shallow copy, not deep copy
//So all the operations will directly affect to original array.


const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //add 9 at starting position
// myArr.shift() //remove first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); //if not present => -1

// const newArr = myArr.join()

// console.log(myArr); //o/p = [0,1,2,3,4,5]
// console.log(newArr); //String //o/p = 0,1,2,3,4,5


// slice & splice

console.log("A ", myArr); //A [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3)
console.log(myn1); //[1,2]
console.log("B ", myArr); //B [0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3)
console.log(myn2);//[1,2,3]
console.log("C ", myArr); //C [0,4,5]
