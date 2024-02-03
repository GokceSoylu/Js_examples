//hocam senkron programın baştan başlayıp sırayla ilerlemesi ve biri bitmeden diğerinie geçmemesidir
//asenkron ise çalışmaya aynı and abaşlamasıdır
//java script senkron çallışan bir programlama dilidir zaten biliyorsun. kodu baştan okumay başlar ve aşşağıya duğru sırasıyla devam eder

//bazı durumlarda js asenkran da çalışır
//Timing
//Events
//HTTP request
//(web api tarafınddan yönetilern her şey asenkro çalışır)

console.log("hasan")

setTimeout(()=>console.log("ilk set time out"),1000)//1sn bekle çalış demek

setTimeout(()=>console.log("ikinci set time out"),500)//.5 sn bekle çalış demek

console.log("sabbah")

//şimdi hocam mevzu şu
//asenkron ve senkron kodlar ayrılır ve aynı anada çalışmaya başlar
//senkronlar kenmündş içinde sırayla
//asenkronlar kendi içinde de aynı and çalışır
