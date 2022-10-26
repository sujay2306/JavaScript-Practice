const uno = ()=>{
    console.log("iam One");
}

const dos = ()=>{
    setTimeout(()=>{
        console.log("ehoohoooo");
    }, 3000)
    console.log("iam Two");
}

const thres = ()=>{
    console.log("iam thres");
}

uno()
dos()
thres()