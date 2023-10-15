document.write("Welcome Necmiye <br>");
document.writeln("hello world");
document.write("fnish");//sayfaya çıktı
console.log("naber bebis");//konsolo çıktı

let a = 10;
let b = 20;
console.log("a + b = ", a + b);
console.log("a + b" + (a + b));//hocam gördüğün üzere dah çok python a benziyo :)
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

const user = {
    name: "hasan",
    surname: "bokabasan"
}

console.log(user.name);
user.name = "berk";
console.log(user.name);

//user={age:10};
//console.log(user.age);// gibi :))

let x = 10;
console.log(x++);
console.log(++x);//hehe bunlarda var :))

let y = 4;
y **= 2;
console.log(y);

/// == ve ==== arasındaki fark 
let m = 4;
let n = "4";

console.log("m==n ", m == n);
console.log("m===n ", m === n);
// üç eşittir değişknelerin tipininde aynı olup olmamasına bakar

// && || c deki ile aynı

//! kullanıcıdan alınan tüm değerler string olur 
//? alert, promp, confirm
//alert kullanıcıya sadece uyarı veriri,
//promp kullanıcıya istediğimimz mesajı verir ve kullanıcıdan değer almamızı sağlar
//confirm ise kullanıcıdan boolean değer döndürür

alert("I want to play game");
let name= prompt("your name ¿");
if (confirm(name + " are you sure to delete it")) {
    console.log("sildik");
}
else {
    console.log("tamam tamam silmedik");
}


// todo Type Casting

//Number, ParseInt(theVaraible), ParseFloat(theVaraible), String(theVaraible), theVaraible.ToString()
//ParseInt ve ParseFloat arasındaki fark flaot string bile olsa int olduğu için noktadan sonrasını atar 

let arr=[1,2,3,4];
arr=String(arr)
console.log(arr);
console.log(typeof(arr)); //hocam ilginçtir array'i de string'e çevirebiliyor. Ancak arrray to number olmuyor :))

// * Döngü syntax'ı da C'deki ile aynı
for(let i=1;i<11;i++)
{
    for(let j=1;j<11;j++)
    {
        console.log(j+" X "+i+" = ",i*j);

    }
}

//! Fonksiyon tanımlama pythona benziyo
// function func_name (paremeters)
//{ 
//      code;
// }

//? Hocam return type yazmıyoruz dikkate edelim.  pythona benziyo

