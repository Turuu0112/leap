const modal =document.querySelector(".overlay")
const openBtn = document.getElementById("open-modal")
const closeModalbtn =document.querySelector(".modal-close-btn")
const form = document.querySelector("form")
const titleInput =document.querySelector("Input")
const descriptionInput= document.querySelector("textarea")
const selectInput =document.querySelector(".selection")
const deletebTns= document.querySelector("textarea")
const select = document.querySelectorAll(".selection")
const priority =document.querySelectorAll("option")


let index = 0;

openBtn.addEventListener("click",()=>{
    modal.classList.add("open")
})

closeModalbtn.addEventListener("click",()=>{
    modal.classList.remove("open")

})
const cardtempalte = (title, description , priority, id)=>{
    return `
    <div class="card">
    <div>
    <input type ="checkbox" id ="check-box">
        <span>${title}</span>
        <span>${description}</span> 
        </div>
        <div><span>${priority}</span>
        </div>
        <i class="fa-solid fa-pencil"></i>
    <div onclick="deleteItem(${id})">
    <i style="color: red;" class="fa-regular fa-trash-can"></i>
    </div>
    </div>`;
};

const cards = document.querySelector(".cards")

let data = []

const setdata =(arr)=>{
    data = arr.sort((a,b)=> a.priorityIndex - b.priorityIndex)

    render()
}

const render = ()=>{

    cards.innerHTML = "";
    data.forEach((item)=>{
    cards.innerHTML += cardtempalte(item.title , item.description, item.select, item.id)

    }) 
}
form.addEventListener("submit",(event)=>{
    event.preventDefault()

    let priorityIndex
    const title =titleInput.value
    const description =descriptionInput.value
    const select = selectInput.value
    const newdata =[
        ...data,
        {
            id:index,
        title : title,
        description: description,
        select : select,
        priorityIndex:priorityIndex,
    }  
    ]

    index ++;
    setdata(newdata)
    modal.classList.add("open")
})

const deleteItem = (id)=>{
    const newdata =[...data].filter((item) => item.id !== id)
    setdata(newdata)
};

render()