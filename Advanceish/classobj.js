// import User from "./class";
const User = require("./class.js")
const sujay = new User("sujay", "sujay@123")


sujay.enrollCourse("NodeJs")
sujay.enrollCourse("Js")

console.log(sujay.getCourseList())