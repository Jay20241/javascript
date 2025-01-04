//Singleton (contructor)

//const tinderUser = new Object(); //This is singleton obj
//console.log(tinderUser);//outpur => {}
const tinderUser = {} //This is non-singleton obj.
//console.log(tinderUser);//outpur => {}

tinderUser.id = "123ab"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = true

//Nested object
const regularUser = {
    email: "some@gamil.com",
    fullName: {
        username: {
            firstname: "Jay",
            lastname: "Trivedi"
        }
    }
}

//Optional chaining
//console.log(regularUser.fullName?.username.firstname); //Some times from api, the key is not there in obj, so use "?"


const obj1 = {1: "a", 2:"b"}
const obj2 = {2: "a", 1:"b"}

//METHOD-1
const obj3 = {obj1, obj2}
//console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


//METHOD-2
const obj4 = Object.assign({}, obj1, obj2);//here "{}" is target & 'obj1' and 'obj2' is source.
//console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//METHOD-3 => USE THIS MORE
const obj5 = {...obj1, ...obj2};
//console.log(obj5);

//Array of objects - generally in databases
const users = [
    {
        id: 1,
        email: "jt@gmail.com"
    },
    {
        id: 2,
        email: "jt@gmail.com"
    },
    {
        id: 3,
        email: "jt@gmail.com"
    }
]

users[1].email;

//fetching all keys & values of object in array
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true

//There are also some methods, through which you can restrict an object to looping. We will use this for security in databases. 

/////////////////// Video-18 ///////////////////////////
//De-structuring of Objects. (we can also do De-structuring of arrays).

const course = {
    nameC: "JS",
    price: "999",
    instructor: "youtube"
}

//Two methods to extract information 
//1: course.instructor;

//2:
const {nameC} = course;
console.log(nameC);



const {instructor: instr} = course;
//console.log(instructor); //youtube //invalid if you already given short name.
console.log(instr);//youtube


//JSON HAVE KEYS IN "KEYNAME"(STRING) ALWAYS.
//JSON ARE IN FORM OF "OBJECT" OR "ARRAY OF OBJECT".
// [
//     {},
//     {}
// ]