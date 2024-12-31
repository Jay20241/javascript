const accountId = 1224
let accountEmail = "myxyz@google.com"
var accountPassword = "12345" //DON'T USE var.
accountCity = "Jaipur" //Use can use, but don't prefer to use.
let accountState; //If you print it will show "undefined".

//accountId = 50 //Not allowed.
accountEmail = "jt@jt.com"
accountPassword = "2121212"
accountCity = "Bengaluru"

/*
*Not use "var" because of issue in block scope & functional scope
*NOTE: IN JS, ONLY USE "const" & "let".
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);