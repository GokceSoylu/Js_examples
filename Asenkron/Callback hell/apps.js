//CALLBACK HELL
getName((name)=>{
    getSurname(name,(surname)=>{
        getAge(name,surname,(age)=>{
            getDeparment(name,surname,age,(department)=>{
                console.log(name, surname, age, department)
            })
        })
    })
})
//bir nevi recursive function

function getName(callback)
{
    let name="Kelille"
    setTimeout(()=>
    {
        callback(name)
    },1000)
}

function getSurname(name, callback)
{
    let surname="Dimne"
    setTimeout(()=>
    {
        callback(surname)
    },750)
}

function getAge(name,surname,callback)
{
    let age=23
    setTimeout(()=>
    {
        callback(age)
    },200)
}

function getDeparment(name,surname,age,callback)
{
    let dep="cmpe"
    setTimeout(() => {
        callback(dep)
    },600);
}