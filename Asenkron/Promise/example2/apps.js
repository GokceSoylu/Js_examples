//ex 2 -> işte then de başka function çağiırma url hazılama fln
//ex3 te de şe yaparız bunu ekrandan alırız falan
//daha kapsamlı olur kullanıcı hangi daatyı isterse onu yazdırırz falan

//affet bu gece ölmek istedim pembe bi mezarlık olmak istedim 😂


function prepareURL(key)
{
    //console.log(key," ",`https://jsonplaceholder.typicode.com/${key}`," : ",typeof `https://jsonplaceholder.typicode.com/posts?userId=2 `)
    return `https://jsonplaceholder.typicode.com/${key}`
}

function getUsers()
{
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        tipik(xhr,prepareURL("users"),resolve,reject)
    })
}

function getPost(url)
{
    return new Promise((resolve, reject)=>{
        const xhr=new XMLHttpRequest()
        tipik(xhr,url,resolve,reject)
    })
}

function getComments(url)
{
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        tipik(xhr,url,resolve,reject)
    })
}

function tipik(xhr,url,resolve,reject)
{
    xhr.addEventListener("readystatechange",()=>{
        try {
            if(xhr.readyState===4 && xhr.status===200)
                resolve(JSON.parse(xhr.responseText))
        } catch (error) {
            reject(error)
        }
    })
    xhr.open("GET",url)
    xhr.send()
}

getUsers()
.then((data)=>{
    data.forEach(user =>{
        if(user.name==="Ervin Howell")
            getPost(prepareURL(`posts?userId=${user.id}`))
            .then((data)=>{
                data.forEach((post)=>{
                    getComments(prepareURL(`comments?postId=${post.id}`)) 
                    .then((data)=>{
                        console.log(data)
                    })
                })
            })  
    })
})
.catch((error)=>{
    console.log(error)
})