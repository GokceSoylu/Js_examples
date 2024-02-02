//? Arrow Function hocam zaten görmişsindir => şeklinde olan arkadaştır

//normal fonskiyonumuz bu şekilde oluyordu. 
function deneme() 
{
    console.log("denem function");
}
deneme();

//hocam buradaki felsefeyi anlamamız önemli bir değişken tanımlıyoruz ve ()=> ilede fonksiyon tanımlayıp bu değişkenken bu  namsız fonksiyonu atıyoruz
const write = ()=>{
    console.log("write function");
}
write();

//hadi olayı renklendirelim eğer sadece tek satır kod yazacaksak {} laara gerek yok
const afilli_write= ()=> console.log("afilli_write function");
afilli_write();

//hatta tek paremetre alacaksa () bşle gerek yok :))
const a=10;
const double_afilli = x=> console.log(x,"double_afilli function");
double_afilli(a);

//tek satır ve sadece retrun zaman return bile yazmasan olur :))
const square = x=> x*x; 

const cube = x=>console.log(x*x*x,square(x));
cube(2);