const formWrapper=document.querySelectorAll(".form-wrapper")
const form=document.querySelector("#form")
const search_btn=document.querySelector("#search_btn")
const clear_btn=document.querySelector("#clear_btn")
const search_input=document.querySelector("#search_input")
const img_wrapper=document.querySelector(".imagesList-wrapper")

runEvents()

function runEvents()
{
    form.addEventListener("submit",search)
    clear_btn.addEventListener("click",clear)
}

function clear(e)
{
    e.preventDefault()
    search_input.value=""
    Array.from(img_wrapper.children).forEach(cards=>cards.remove())
}
function search(e)
{
    e.preventDefault()
   
    const search_txt=search_input.value.trim()
    fetch(`https://api.unsplash.com/search/photos?query=${search_txt}`,{
        method:"GET",
        headers:{
            Authorization: "Client-ID S9ki3L62ECbdZq7mqNyYfFUGFYcsTX-ErUZfYOwA-WY"
        }
    })
    .then(responce=>responce.json())
    .then(data=>{
        data.results.forEach(img => {
            addImgUI(img.urls.small)
        });
    })
    
}
function addImgUI(url)
{
    const div=document.createElement("div")
    div.className="card"
   
    const img=document.createElement("img")
    img.setAttribute("src",url)
    img.height="400"
    img.width="400"
    
    div.append(img)
    img_wrapper.append(div)
}