const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // takes automatic 'var'
let accountState; // print Undefined 

// accountId = 2 // not allowed, due to 'const' variable


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // use to print multipule components in form of table