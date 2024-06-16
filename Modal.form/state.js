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
        <h1>${title}</h1>
        <p>${description}</p> 
        </div>cle
        <div><span>${priority}</span>
        </div>
    <div onclick="deleteItem(${id})">
        <button>x</button>
    </div>
    </div>
`;
};
const cards = document.querySelector(".cards")

let data = []

const setdata =(arr)=>{
    data = arr

    render()
}

const render = ()=>{
    console.log(data)

    cards.innerHTML = "";
    data.forEach((item)=>{
    cards.innerHTML += cardtempalte(item.title , item.description, item.select, item.id)

    }) 
}
form.addEventListener("submit",(event)=>{
    event.preventDefault()


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
    }  
    ]

    index ++;
    setdata(newdata)
    modal.classList.add("open")
})

// const arr = select
//     arr.sort ((a, b, c) => a.length - b.length - c.length)


const deleteItem = (id)=>{
    const newdata =[...data].filter((item) => item.id !== id)
    setdata(newdata)
};

render()