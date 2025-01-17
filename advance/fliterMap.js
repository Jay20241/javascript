//Video - 30
//Filter Map and Reduce

//for-each loop
const coding = ["js", "flutter"]
const values = coding.forEach((item)=>{
    console.log(item);
    return item;
})
console.log(values); //undefined

///////////////////////////////////////////////////////////

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter((num)=> num>4)
const newNums1 = myNums.filter((num)=> {
    return num>4
})

console.log(newNums); // [5,6,7,8,9,10] 

//or
const newNums2 = [];
myNums.forEach((num)=>{
    if (num>4) {
        newNums2.push(num);
    }
});

//example of object

const books = [
    {
        title: 'Rich Dad',
        genre: 'Finance',
        publish: 2002
    },
    {
        title: 'Chankya',
        genre: 'History',
        publish: 1800
    }
];

let userbook = books.filter((bk) => bk.genre === 'History');

userbook = books.filter((bk) => bk.publish >= 2000 && bk.genre === "Finance");

//---------------------map method-------------------------//

const myNumbers = [1,2,3,4,5,6];
const add10 = myNumbers.map( (num) => num+10);
console.log(add10); //[11,12,13,14,15,16]

//Chaining :
/*
const add10 = myNumbers
                    .map()
                    .map()
                    .filter();

*/

//-----------reduce method (used in shopping cart etc) see mdn Docs ----------//

const myNumbers2 = [1,2,3];


// const myTotal = myNumbers2.reduce(function (acc,current){
//     console.log(`acc: ${acc} and curr = ${current}`);
//     return acc + current
// }, 0);

const myTotal = myNumbers2.reduce((acc,current) => acc + current, 0);

console.log(myTotal);//6
//You can use this in Array of Objects.