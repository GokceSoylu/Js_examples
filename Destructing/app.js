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
console.log(a,b,c,d); //yani hocam anlıyacağın burada abcd dizi değil bir dizinin elemaları forech vb olmadan kolaylıkla atmak için kullılan sytaxs