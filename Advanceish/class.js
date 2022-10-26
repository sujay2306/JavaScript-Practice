class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    #courseList=[];  //making it private var

    getInfo(){
        return {name:this.name,email:this.email}
    }

    enrollCourse(name){
        this.#courseList.push(name)

    }
    getCourseList(){
        return this.#courseList
    }
    login(){
        return "you are logged in"
    }

}

class subAdmin extends User{
    getAdminInfo(){
        return "this is Subadmin"
    }
}


//instead of uding this we will export
// let sujay = User("sujay", "sujay@123")

module.exports = User

// const rock = new User("rock", "rock@123")
// console.log(rock.getInfo());
// rock.enrollCourse("Backend dev")
// console.log(rock.getCourseList());

const tom = new subAdmin("tom", "tom@123")
console.log(tom.getAdminInfo())
console.log(tom.getInfo())
console.log(tom.login())
console.log(tom.getCourseList())