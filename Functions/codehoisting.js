//context in JS 
// 1. global
// 2. one that is executing right now 

// it is executing because of context
tipper("5")

function tipper(a){
    var bill = parseInt(a) //takes string coverts to int
    console.log(bill+5);
}

//it wont work up 
bigTipper("200")

//this wont work because:
//functions are defined and made available
//var is scanned and made undefined "this is called hoisting"
var bigTipper = function(a){
    var bill = parseInt(a) //takes string coverts to int
    console.log(bill+15);
}
//but it will work below 
bigTipper("200")


//this gives me undefiend 
console.log(name);
name = "sujay"