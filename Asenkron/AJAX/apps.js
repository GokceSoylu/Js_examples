

function prepareURL(url,id)
{
    if(id!=null)
        return `${url}?postId=${id}`
    return url
}

function getComments(url,id)
{
    const xhr=new XMLHttpRequest()
    xhr.addEventListener("readystatechange",()=>
    {
        if(xhr.status===200 && xhr.readyState===4)
            console.log(JSON.parse(xhr.responseText))
    })
    let url_new=prepareURL(url,id)
    xhr.open("GET",url_new)
    xhr.send()
}

getComments("https://jsonplaceholder.typicode.com/comments",prompt("id please"))