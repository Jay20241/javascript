//High Order Array loops: 

//for of

//["", "", ""] Array of strings
//[{}, {}, {}] Array of Objects

const arr = [1,2,3,4,5]

for (const element of arr) {
    console.log(element);
}

const greetings = "Hello JS"
for (const greet of greetings) {
    console.log(greet);
    //you can use break and continue here also.
}

//Maps
//Object and Maps are almost same(both have key-value pair)
//But Map remembers the order, objects doesn't. //Check mdn Documentation.
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America")

console.log(map);

for (const key of map) {
    console.log(key); //Prints whole map with keys-values   
}

for (const [key, value] of map) {
    console.log(key, ':--', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',
    js: 'javascript',
    fl: 'flutter'
}
//HERE Object is not iterable. We can't put object in for-of loop.


//So we use for-in loop for Objects.

for (const key in myObject) {
    console.log(key); //Prints all keys
    console.log(myObject[key]);
}

//YOU CAN USE FOR-IN, FOR-OF LOOP IN ARRAYS.
//======BUT CAN'T USE FOR-IN LOOP IN MAP.=========

//High-Order-function:
const coding = ["js", "flutter" ,"java", "xml"]
coding.forEach( function (item) {
    console.log(item);
});

//Arrow func - functionName = () => {}
coding.forEach((item)=>{})

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
});

//Array of object:

const myCoding = [
    {
        name: "javascript",
        fileName: "js"
    },
    {
        name: "java",
        fileName: "java"
    },
    {
        name: "python",
        fileName: "py"
    }
];

myCoding.forEach((item)=>{
    console.log(item.name);
    console.log(item.fileName);
})