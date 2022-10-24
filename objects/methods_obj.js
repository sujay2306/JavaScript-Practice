var user = {
    firstName : "Sujay",
    role: "Admin",
    facebookSignin : true,
    loginCount: 32,
    courseList:[],
    buyCourse: function(courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function(){
        return ` ${this.firstName} is enrolled in ${this.courseList} `
    }
};


user.buyCourse("ProBackedDEV, Python ")
console.log(user.getCourseCount());