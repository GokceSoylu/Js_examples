//post 1 in yorumlarının alalım
//önce post bire ulaşır onun id sini öğrenir oradan da 


// document.querySelector("#button").addEventListener("click",()=>
// {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response=>response.json())
//     .then(posts=>{
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts.id}`)
//         .then(response=>response.json())
//         .then(comments=>console.log(comments))
//     })
// })


//yukarıda async await olmaksızın normal fetch ile yazdık
//şimdi aysnc await kullanalım

document.querySelector("#button").addEventListener("click", async ()=>{
    const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts.id}`)).json()
    console.log(comments)
})