
function readStudent(url)
{
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        xhr.addEventListener("readystatechange",()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200)
                {
                    resolve(JSON.parse(xhr.responseText))
                }
                    
            } catch (error) {
                reject(error)
            }
        })
        xhr.open("GET",url)
        xhr.send()
    })     
}
readStudent("https://jsonplaceholder.typicode.com/posts")
.then((data)=>{
    data.forEach(dataPart => {
        if(dataPart.userId==1)
            console.log(dataPart)
    })
})
.catch((error)=>console.log(error))
//tehn içinde ayrı bir fonk çağırma