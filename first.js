document.write("Welcome Necmiye <br>");
document.writeln("hello world");
document.write("fnish");//sayfaya çıktı
console.log("naber bebis");//konsolo çıktı

let a=10;
let b=20;
console.log("a + b = ",a+b);
console.log("a + b" + (a+b));//hocam gördüğün üzere dah çok python a benziyo :)
//console.clear();//bunla da consolu temizleriz :))

alert("lütfen enter tuşuna basmayımız"); //pupup ile kullanıya uyarı vermeyi sağlar. window objesinin metodudur. document window'un 
//içindeki bir objedir. en buyuk obje window ondan windowun metodlarınında objeyi yazmayız ama document console gibi objelerin metodlarında obje de belirtilir 

//consolo.log(location.host);
console.error("hata fırlattım");//bu sekilde consolda hata çıkartabilirsin


//? var her zaman function scope dır
//? let ve const ise block scop a sahiptir. 
//var ram da daha çok yer kaplşayacağı için yaavaşlamaya sebep olur
//var da iki tane aynı isimli değişken oluşturabilirsin. aam diğerlerinde olmza
//ayrıca const adı üstünde constan dır

//const obje tanımladığın zaman içeriğine yeni özellik eklemezsin ama. özelliğin değerini değiştirebilirisn

const user ={
    name:"hasan",
    surname:"bokabasan"
}

console.log(user.name);
user.name="berk";
console.log(user.name);

user={age:10};
console.log(user.age);// gibi :))