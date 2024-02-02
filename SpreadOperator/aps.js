//hocam bu spread operatoe dünya tatlıs bir arkadaş ... işaretiile kullanılır
//arraylar falan için böler derler. aslınd aelemnalrına böler ve atamalrd aişimizi kolaylaştırır

let arr=[1,2,3,4,5]
let arr2=[...arr]

let arr3=["a","b",...arr]

console.log(arr)
console.log(arr2)
console.log(arr3)

const f=(a,b,c,d,e,f)=>
{
    console.log(a,b,c,d,e,f);
}

f(1,2,3,...arr2)

//hocam olayı anladık mı? paremetre olarak verirken yani atama yaparken 
//sınır varsa baştan atama yapmaay başlar gidebildiği kadar gider

