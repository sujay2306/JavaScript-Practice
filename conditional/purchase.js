//user is only allowed to purchase if he is:
// 1. logged in
// 2.email is verified
// 3.card info is valid 
// if anything is missing stop purchase 

isLoggedIn = true
isEmailVerified = true
cardInfo = true

if (isLoggedIn){
    console.log("Login successful");
    if (isEmailVerified){
        console.log("Email verified");
    }
    if (cardInfo){
        console.log("You can make your purchase");
    }
}