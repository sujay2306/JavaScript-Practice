const uno = ()=>{
    return "iam One"
}

// const dos = ()=>{ //we can use async here got a op as promise undefined
//     setTimeout(()=>{
//        return "iam Two"
//     }, 3000)
   
// }

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve ("iam Two") 
        }, 3000)
    })
}


const thres = ()=>{
    return "iam thres"
}

const callMe = async() =>{
    let val1 = uno()

    console.log(val1);
    let val2 = await dos() //this tells wait for me dont leave so this will be waiting in que until it executes 
    console.log(val2);

    let val3 = thres()
    console.log(val3);
}

callMe()