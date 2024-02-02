//destructing diziden kolay atama ilemidir

let arr=["a","b","c","d"];

let [z,y,v,u]=arr; 

console.log(z,y,v,u);

const calculater=(x,y)=> //gördüğün üzre ; gerek yok bu destructing ile ilgili değil arrow function ile ilgili
{
    let sum=x+y
    let pro=x*y
    let sub=x-y
    let div=x/y

    let arr=[sum,pro,sub,div];
    return arr
}

let [a,b,c,d]=calculater(11,2);  
console.log(a,b,c,d); //yani hocam anlıyacağın burada abcd dizi değil bir dizinin elemaları forech vb olmadan kolaylıkla atmak için kullılan sytax

//birde obje ile yapmayı deneyilm
//obje de dustructing yapmanın iki püf noktası var bir kullalınam key aynı oklmalı ki yakalayabilsin çünkü array olduğunda zatern sırayla index
//değerine göre aatadığı için sorun yok am aobje de öyle değil neyin karşılığı ne bilebilmek için key kullanılmalı. hmm eğer değişken adı olarak keyi
//değl farklı bir değişken kullanmak istesekte key:new_valueName yazarız hadi bakalım :))

let student ={
    name:"necmiye",
    surname:"soylu",
    age :23,
    dep:"cmpe"
};
let {name,surname,age,dep:bolum}=student;
console.log(name,surname,age,bolum);