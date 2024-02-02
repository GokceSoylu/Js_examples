//hocam haydi mapleri analtalım  
//map aslında bir array türüdür
//key value mantığınyla çalışır
//hocam şimdi bu maplere bir tür arrayhdir dedik ya
//arrayler nasıl? -> temelde key value mantığıyşa çaışır aslında
//arraylerde key değerini değiştiremeyiz 0 dan başlar artırarak kendi atar
//map te ise bu konuda d aözgürlük sağlar işte
//hem key hem value değişkenş için istediğin her türde deği,şken tipini atayabilirsin

//todo 

let map=new Map();
map.set(1,1);
map.set(2,"b");
map.set("hasan",3);
map.set("hasan","sabbah");
map.set([1,2,3,4],{name:"hasan",surname:"sabbah",place:"alamud kalesi"});

//hocam mapa key olarak dizi verdiiğinde referans oldupuna dikkat et. bu yüzden referansı alman gerekir
//tyani başka yerde tanımladığın bir diziyi kullan ki keyden çağırabilesin

let map1=new Map();
map1.set(45,"Manisa");
console.log(map1.get(45));
console.log(map.size);
map.delete(1);
console.log(map.size);

console.log(map.has("hasan"));//parametre = key

//for of ile map üzerinde dönebilriz
for(let [key,value] of map)
{
    console.log(value)
}

for(let [key,value] of map)//hocam burad ane yaptığımızm anladın mı? bu direkt desracting
{
    console.log(key,value)
}

const keys=Array.from(map.keys());//nedne böyle şekilden şekile girdik? Çünkü key() aldığımızda
//atadığımız değişken array değil ve foreach ile üzerinde dönemiyoruz. ama Arry.from ile
//arraye çevirdik
keys.forEach((key=>console.log("this ",key)))

//ama şöylebir şey yapablirisin
for(let key of map.keys())
{
    console.log(key)//hocam forEch için array lazımm neticede for için lazım değil :))
}

for(let value of map.values())
{
    console.log(value)
}

//map to  array to map is possible
//aam şono bilelim map to array olursa [[],[],[]]şeklinde bir yapı oluşur

const map2=new Map();
map2.set(1,"a");
map2.set(2,"b");
map2.set(3,"c");
map2.set(4,"d");
map2.set(5,"e");

let array=Array.from(map2);

array.forEach(value=>console.log(value[1]));