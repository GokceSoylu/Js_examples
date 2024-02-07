//hocam bu zaman kadar istek için XMLHttpRequest objesini kullandık ama zahmetli bir iş. her şeyin başında promise objesini oluşturduk ve fonksiyon içnde
//XMLHttpRequest oluşturduk sonra state değişimini kullanmak için addeventlistener metodunu kullanduk state nin istediimiz hale gelip gelmediğini kontrol
//sonunda gelincede responce yaptık onnu bırak ayrıca open ile isteğimiz  isteği açmayı bide send ile atmayıda unutmadık. çok yorulduk yıprandık örselendik 😅
//ama bu acılar son buldu hem xml hem promise işlemlerini kendi halledecek direkt than ve catch iel halelltmemizi sağlaycak bir arkadaşımız var
//FETCH 👏🏻

console.log(fetch)
fetch("https://jsonplaceholder.typicode.com/users")
.then(responce=>responce.json())
.then(data => console.log(data))

//evet evet işte bu kadar
//tama daha fazla lafı uzatmadn anlatayım nedir bu fetch 'in olayı

//hocam öncelikle direkt fetch diyip metodu çaloştırıypruz. fetch window objesinin bir metodu. daha sonra 
//paremetre olarak url ivermemiz yeterli
//hocam isteği gönderiyor ama promise de içinde dedik ya cevabı yakalamak için hmn arkadan then kullanırız.
//dıın zurnanın selamun aleyküm dediği yer ilk response ile yine promise döndürür bunu nyakalamk için fetch in json metodunu kulanırız
//ve buda promise döndürdüğü için ikinci bir then kullanıırz ve bu ikinxci then ile data yı yakalar ve dataya istediğimimz işlemi bu
//bu ikinci then içerisinde yaparız


//birde post metodumuz var. yukarıda diretk url verdiğimiz get oluyor
//sunucuya bir şeyler göndermek istersekte post kullanırız şu an bir şeyler gönderebileceğimiz bir sunucumuz olmadığı için sadece göstermelik yazıcam



// fetch(url,{
//     method:"POST",
//     headers:{
//         "Content-Type":"application.json"
//     },
//     body:JSON.stringify(data)
// })