
let check=true
function createPromise()
{
    return new Promise((resolve,reject)=>{
        if(check)
            resolve("successfull")
        else
            reject("failed")
    })
}

createPromise()
.then((response)=>console.log(response))
.catch((response)=>console.log(response))
.finally(()=>console.log("iyi ki java oop öğrenmişim :))"))