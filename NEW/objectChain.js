var User = function(firstName, CourseCount){
    this.firstName = firstName
    this. CourseCount =  CourseCount
    this.getCourseCount = function(){
        console.log(`enrolled in: ${this.CourseCount}`);
    }
}

User.prototype.getFirstName = function() {
    console.log(`your first name is : ${this.firstName}`);
}
var sujay = new User("sujay", 22);
sujay.getCourseCount()

if(sujay.hasOwnProperty("firstName")){
    sujay.getFirstName()
}