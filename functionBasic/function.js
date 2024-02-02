//! Fonksiyon tanımlama pythona benziyo
// function func_name (paremeters)
//{ 
//      code;
// }

//? Hocam return type yazmıyoruz dikkate edelim.  pythona benziyo
//? ayrıca paremetre tipini de yazmıyoruz. ZAten normalde de değişkne tanımlarken tip yazmadığımız içim paremetre listeisnde de 

function square(a)
{
    return a**2;
}


let x=prompt("please enter a number");
alert(square(x));
console.log(square(x));

//elimiz deymişken birazda dizilerden bahsedelim

let a=[];
let aa=[1,2,3];
let aaa=Array();
let aaaa=Array(1,2,3,4);

let arr=[1,"2","mahmut",45,6];

console.log(arr[2]);
console.log(typeof(aa));

//array oluşturuken ister direkt [] koyarak isterde nesne üreterek yapabiliriz. Ama tabii nesne üretmek ram olarak daha maliyetli olur
//ayrıca tıpkı python da olduğu gibi arraylar birden fazla veri tipini içerebilir
//tipi ne olusa olsun nasıl üretirsek üretelim tüm arraylarin veri tipi objectir :) 



//todo birde foreach e bakalım
arr.forEach(function(element)
    {console.log(element);}
);

//ASkim foreach'i bir method gibi düşünebliriz. paremetre olarak bir fonksiyon alıyor ve metodu da bir dizi çalıştırıyor.
//pareemtre olarak verdiğimiz fonsiyon döngüde ne yapacağımızı belirtiyor. 

let array1=[1,2,3,4,5,6]
let i=1;
array1.forEach(function(itr)
    {
        console.log(i+"squrae = "+(i++*itr));
    });
//zaten java gibi bir olduğu için array metodları var.
//pop sondan silme, shift başdan silme , push sona ekleme, unshift başa ekleme, splice eleman ekleme ve silme , split  belirli bir iafadeye göre bölme vb.

//hocam yazmıyıcam tek tek Math objesinin matematik metodkarı var Math.floor() vb.