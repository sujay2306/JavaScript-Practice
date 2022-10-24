// define A Function that can answer a role of a user 

// admin  - get full access
// subadmin - get access to create / delete courses
// testprep - get access to create / delete tests
// user - gets accessto consume content 
//other - trial user 

// I/P: getUserRole(name, role)

// function getUserRole(name , role )
//using var 
// var getUserRole = function(name, role)
//using arrow function
var getUserRole = (name, role) => {
    switch(role){

        case "admin":
            return `${name} is a admin with full access`
        case "subadmin":
            return  `${name} has access to create / delete courses`
        case "testprep":
            return `${name}has access to create / delete tests`
        case "user":
            return `${name} has access to consume content `
        default:
            return `${name} is a trial user `
    }
}

var userRole = getUserRole("sujay", "admin")

console.log(userRole);