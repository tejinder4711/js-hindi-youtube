const accountId = 112233
let accountEmail = "tj@yopmail.com"
var accountPassword = "123456"
accountCity = "Ludhiana"

let accountState;



// accountId = 2 // not allowed

accountEmail = "abc@yopmail.com"
accountPassword = "12321"
accountCity = "Chandigarh"

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// prefer not to use var because of issue in block scope and functional scope 
