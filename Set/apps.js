//hocam map ve setin mantığı benzer aslında ama burada key vermiyoruz ve
//bir değeri sadece  bir kez alır sen aynı değeri eklemeye
//çalışsan dahi eklemez

let set=new Set()
set.add("hasan")
set.add("sabbah")
set.add("alamud")
set.add("uşak")

console.log("first iteration")
for(let value of set)
{
    console.log(value)
}

console.log("second one")
const iteration=()=>set.forEach(item=>console.log(item))
if(set.has("uşak"))
{
    set.delete("uşak");
    iteration();
}
   