const modal = document.querySelector(".overlay");
const openbtn = document.getElementById("open-modal");
const closeModalbtn = document.querySelector(".modal-close-btn");
const form = document.querySelector("form");
const titleInput = document.querySelector("Input");
const descriptionInput = document.querySelector("textarea");
const cards = document.querySelector(".cards");

const cardtempalte = (title, description) => {
  return `<div class="card">
    <h1>${title}</h1>
    <p>${description}</p>
    <div class="remove-btn">
        X
    </div>
    </div>`;
};
openbtn.addEventListener("click", () => {
  modal.classList.add("open");
  console.log("hi");
});

closeModalbtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const description = descriptionInput.value;

  const card = cardtempalte(title, description);

  cards.innerHTML += card;

  modal.classList.remove("open");

  const deletebTns = document.querySelectorAll(".remove-btn");

  deletebTns.forEach((btn) => {
    btn.addEventListener("click", () => {
      event.target.parentNode.remove();
      console.log("haha")
    });
  });
});
