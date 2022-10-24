//setTimeout = how much time to stop
//setInterval =  how much time it shuld play

var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");


let count = 1

setInterval(()=>{
    if(count < 1000){
        count ++
        counter.innerText = count
    }

},1) //1 ms

setInterval( () =>{
    followers.innerText = "Followers in instagram"
}, 5000)