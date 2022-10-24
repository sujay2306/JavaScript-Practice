//create an application using 

// admin  - get full access
// subadmin - get access to create / delete courses
// testprep - get access to create / delete tests
// user - gets accessto consume content 

var user  = "abc"

switch(user){
    case "admin":
        console.log("you get full access");
    break

    case "subadmin":
        console.log("you will get access to create / delete courses");
    break

    case "user":
        console.log("ypu will get access to consume content ");
    break
    default:
        console.log("please verigy your account");
}