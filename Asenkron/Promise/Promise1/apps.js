//hocam promise in üç durumu var
//pending (resolve-bekleme-işliyor-dvm ediyor)
//fullfiiled (başarılı)
//reject (red)



//resolve(parametre) -> .then(parametre)
//(reject(error) -> .catch(error) 

//? promise ilk adım 
let check=false
const promise1=new Promise((resolve,reject)=>{ //hocam burada istediğimiz ismleri verebilrliriz
    if(check)                                  //peki buna rağmen bhangi fonksiyonu tetikleyeceğini nasıl biliyor
        resolve("Promise is success")          //ilk verdiğin parametre resolve ikinci reject fonksiyonlarını temsil eder :))
    else
        reject("promise is failed")
})

console.log(promise1)

