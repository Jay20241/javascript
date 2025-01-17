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
        genre: 'Finance'
    },
    {
        title: 'Chankya',
        genre: 'History'
    }
]
