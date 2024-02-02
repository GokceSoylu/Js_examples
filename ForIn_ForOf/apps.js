//for in ile index alırız
//for of ile değeri alırız

//önce bir arrow function ile ilgili bir ayrıntı verelim 
//for kullanımında arrow function

let arr=["a","b","c","d","e","f"]
arr.forEach(item=> console.log(item))

console.log("\n forin")
for(item in arr)
{
    console.log(item)
}

console.log("\nforof")
for(item of arr)
{
    console.log(item,arr.indexOf(item))
}