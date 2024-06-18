const modal = document.querySelector(".overlay");
const openBtn = document.getElementById("open-modal");
const closeModalbtn = document.querySelector(".modal-close-btn");
const form = document.querySelector("form");
const titleInput = document.querySelector("Input");
const descriptionInput = document.querySelector("textarea");
const selectInput = document.querySelector(".selection");
const deletebTns = document.querySelector("textarea");
const priority = document.querySelectorAll(".selection option");
const status = document.querySelector(".status")

const uid = () =>{
    return Date.now().toString(36) + Math.random().toString(36)
}

let index = 0;

openBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

closeModalbtn.addEventListener("click", () => {
  modal.classList.remove("open");
});
const cardtemplate = (title, description, priority, id, status) => {
  return `
    <div class="card">
    <div class="check">
    <input type ="checkbox" id ="check-box" >
        <div style="margin-left: 10px"><p>${title}<p>
        <p>${description}</p> </div>
        </div>
        <div>
        <span>${priority}</span>
        </div>
        <i style="margin-left: 80px " class ="fa-solid fa-pencil"></i>
    <div onclick="deleteItem(${id})">
    <i style="color: red;" class="fa-regular fa-trash-can"></i>
    </div>
    </div>
    `;
};

const todo = document.querySelector(".Todo");
const inprogress = document.querySelector(".In progress")
const done = document.querySelector(".Done")
const blocked = document.querySelector(".Blocked")

let data = [
    {
        uid: uid(),
    }
];

const setdata = (arr) => {
  data = arr
  render();
};

const render = () => {

  todo.innerHTML = "";
  inprogress.innerHTML = "";
  done.innerHTML = "";
  blocked.innerHTML = "";

  let todo = []
  let inprogress = []
  let blocked = []
  let done = []

  
  data.forEach((item) => {
    if(item.status === "To do"){
        todo.push(cardtemplate({...item}))
    }else if(item.status === "In progress"){
        inprogress.push(cardtemplate({...item}))
    }else if(item.status === "Done"){
        done.push(cardtemplate({...item}))

    }else if(item.status === "Blocked"){
        blocked.push(cardtemplate({...item}))
    }

});
todo.sort((a,b)=>{
    const aP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;
    const bP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;

    return aP - bP;
})
inprogress.sort((a,b)=>{
    const aP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;
    const bP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;

    return aP - bP;
})
done.sort((a,b)=>{
    const aP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;
    const bP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;

    return aP - bP;
})
blocked.sort((a,b)=>{
    const aP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;
    const bP = a.priority === "High" ? 3 : a.priority === "Medium" ? 2 : 1;

    return aP - bP;
})
todo.forEach((item)=>{
    todo.innerHTML += item;
})
inprogress.forEach((item)=>{
    inprogress.innerHTML += item;
})
done.forEach((item)=>{
    done.innerHTML += item;
})
blocked.forEach((item)=>{
    blocked.innerHTML += item;
})

}


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const description = descriptionInput.value;
  const select = selectInput.value;
  const newdata = [
    ...data,
    {
      id: index,
      title: title,
      description: description,
      select: select,
    }
  ];

  index++;
  setdata(newdata);
  modal.classList.add("open");
});

const deleteItem = (id) => {
  const newdata = [...data].filter((item) => item.id !== id);
  setdata(newdata);
};

render();
