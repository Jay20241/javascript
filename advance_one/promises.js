//Promise is an object.

//CREATION:-
const promiseOne = new Promise(function(resolve, reject){//new object creation
    // Do an async task here
    // Do DB calls, cryptography, network call here

    setTimeout(() => {
        console.log('async task is complete');
        resolve();
    }, 1000);
}); 

//CONSUMPTION:-
promiseOne.then(function () {
    console.log("Promise consumed");
});

//Example-2:-
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('async task 2 is complete');
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 is resolved");
})

//Example-3
//passing data from creation to consumption
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        //database task
        resolve({username: "Hello", email: "hello@hello.com"}); //Pass data here, data can be "Object", array, function etc...
    }, 1000);
})
promiseThree.then(function(ourUser){
    console.log(ourUser); //{username: "Hello", email: "hello@hello.com"}
})


//Example-4:-
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Jay", password: "12"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username); //Jay <= if error=false
}).catch(function (error){
    console.log(error); //ERROR: Something went wrong <= if error=true
}).finally(()=>{ //Ye to execute hoga hi hoga.
    console.log("The promise is either resolved or rejected");
})

//.then.catch.then.then - possible


const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "JavaScript", password: "12"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive //promiseFive is object, so do not write promiseFive()
        console.log(response);   
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

//------------Example with Fetch()-----------------//
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() //Yes, data ko convert karne me bhi time lagta he, so await idhar bhi lagana padega
        //Esa nai he ki sirf database aur related kaam me hi time lgta he.
        console.log(data);
    } catch (error) {
        console.log("E: ", error); //What will print here?
    }
}
getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))//What will print here?

// promise.all
// yes this is also available, kuch reading aap b kro.