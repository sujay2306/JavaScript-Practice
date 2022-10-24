// var isEven = (element) => {
//     // if(element %2 == 0 ){
//     //     return true 
//     // }
//     // return false
//     return element %2 === 0;
// };

// console.log(isEven(2));

//goes through all element in an array and does the is Even operation
// var result = [2,4,6,8,0].every(isEven);
// console.log(result);

//callback using arrow
var result = [2,4,6,8,0].every((e)=>  e %2===0);
console.log(result);