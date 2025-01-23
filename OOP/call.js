function setUserName(username) {
    //complex databases calls
    this.username = username;
    console.log("called");
}

function mycreateUser(username, email, password) {

    //setUserName(username) //It seems like call, but it is just reference, not call.
    //explicit call

    //NOw use my "this", not your "this" => setUserName.call(""this"", username)
    setUserName.call(this, username) //it is used to hold variable, not to erase from call stack
    this.email = email;
    this.password = password;
}

const myacc = new mycreateUser("chai", "chai@fb.com", "123");
console.log(myacc); 