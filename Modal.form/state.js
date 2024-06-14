const modal =document.querySelector(".overlay")
const openBtn = document.getElementById("open-modal")
const closeModalbtn =document.querySelector(".modal-close-btn")
const form = document.querySelector("form")
const titleInput =document.querySelector("Input")
const descriptionInput= document.querySelector("textarea")
const deletebTns= document.querySelector("textarea")


let index = 0;

openBtn.addEventListener("click",()=>{
    modal.classList.add("open")
})

closeModalbtn.addEventListener("click",()=>{
    modal.classList.remove("open")

})
const cardtempalte = (title, description)=>{
    return `<div class="card">
    <h1>${title}</h1>
    <p>${description}</p>
    <div class="remove-btn">
        X
    </div>
    </div>`;
}
const cards = document.querySelector(".cards")

let data = []

const setdata =(arr)=>{
    data = arr

    render()
}

const render = ()=>{
    cards.innerHTML = "";
    data.forEach((item)=>{
       cards.innerHTML += cardtempalte(item.title , item.description)

    }) 
}
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const title =titleInput.value
    const description =descriptionInput.value
    const newdata =[
        ...data,
      {
        title : title,
        description: description,
    }  
    ]
    setdata(newdata)
    modal.classList.add("open")
})

render()