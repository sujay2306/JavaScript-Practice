const user  = ["sujay",3,"admin"]
// var role = user[2]
// var name = user[0]

//destructuring
// var [name, course, role ] = ["sujay",3,"admin"]
// console.log(role);


//notmal way using objects 
const myUser = {
    name:"Sujay",
    course : 5,
    role: "admin"
}

console.log(myUser.course);

//destructure method
const {name, course, role} = myUser
console.log(course);