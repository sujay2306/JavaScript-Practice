var myMap = new Map()

myMap.set(1,"uno")
myMap.set(2,"thos")
myMap.set(3,"thres")
myMap.set(4,"quatro")


// console.log(myMap);
for(let keys of myMap.keys()){
    console.log(`key is ${keys}`);
}

for(let values of myMap.values()){
    console.log(`Value is ${values}`);
}

for(let [key,values] of myMap){
    console.log(`key is ${key}, Value is ${values}`);
}
//delete
myMap.delete(2)
myMap.forEach((key, val ) => {
    console.log(`${key}, ${val}`);
})