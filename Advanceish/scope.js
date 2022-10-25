// console.log(name);
//let name = "hitesh"
var name = "hitesh" //we use let because it gives error things like backend requires error instead of undefined given by var

if (true){
    let lastName = "sujay"
    console.log(lastName);  //if i use let it log inside will work but if i use var even outside scope it will be accessabel
}
//gives error using let but works in var
console.log(lastName);