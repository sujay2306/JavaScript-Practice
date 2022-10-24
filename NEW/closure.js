function init() {
    var firstName  = "Sujay"
    console.log("hey");
    function sayFirstName(){
        console.log(firstName)
    }
    return sayFirstName
}

var value = init()
console.log(value);