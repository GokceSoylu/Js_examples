let users=[
    {
        name:"kemal",
        post:"ankara",
        id:1
    },
    {
        name:"Feride",
        post:"Bursa",
        id:6
    },
    {
        name:"Kamran",
        post:"İstanbul",
        id:34
    },
    {
        name:"Nadide",
        post:"Adıyaman",
        id:2
    },
    {
        name:"Sezen",
        post:"İzmir",
        id:35
    }
]

//Şu haldeyken asenkron problemi yaşıyoruz öncelikle bunu callback ile çözelim
// function getId()
// {
//     setTimeout(()=>{
//         let id=prompt("please enter the id")
//         return id
//     },1000)
// }

// function getPostByUserId(userId)
// {
//     setTimeout(()=>{
//         users.forEach((user)=>{
//             if(user.id==userId) 
//                 console.log(user.post)
//         })
//     },500)
// }

//let id=getId()
//getPostByUserId(id)

//Callback
function getId(callback)
{
    setTimeout(()=>{
        let id=prompt("please enter the id")
        callback(id)
    },1000)
}

function getPostByUserId(userId)
{
    setTimeout(()=>{
        users.forEach((user)=>{
            if(user.id==userId) 
                confirm(user.post)
        })
    },500)
}

getId(getPostByUserId)