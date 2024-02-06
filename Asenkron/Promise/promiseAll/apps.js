const p1=Promise.resolve("promise1 is succesfull")
const p2=Promise.resolve("promise2 is succesfull")
const p3= new Promise((resolve,reject)=>{
    resolve("promise3 is also succesfull")
})
const p4=Promise.reject("hataaa")
Promise.all([p1,p2,p3,p4])
.then(response => console.log(response))
.catch(err => console.log(err))

//burada bir tanesi bilr hata verse all hata döndürür sadece hepsini doğru resolve olması durumda doğru döndürürü.
//ne yaptık peki burada hocam burada tam promise oluşturmak durumlara göre
//resove reject döbdürmektense direkt promise sınınndan resolve veya reject mettodlarının çalışıtıdık. yani biz bu tanımlı
///p1 p2 p3 yada p4 ü kullandığmımzda başka işlem yapmaksızın direkt esolve yad areject neyte sahipse onu döndürü