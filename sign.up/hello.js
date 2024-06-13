const signUp = document.querySelector(".Sign-up button");
const right = document.querySelector(".right");
const box = document.querySelector(".box");
const sigign = document.querySelector(".Sign-ign button")
const left = document.querySelector(".left");


signUp.addEventListener("mousedown", () => {
  right.classList.add("change", "over");
  left.classList.add("left-change","over")


});
sigign.addEventListener("click", () => {
  left.classList.remove("left-change", "over");
  right.classList.remove("change" ,"over")



});

// const container = document.getElementById("container");
// const signUpButton = document.getElementById("signUp");
// const signInButton = document.getElementById("signIn");

// signUpButton.addEventListener("click", () => {
//   container.classList.add("change");
// });

// signInButton.addEventListener("click", () => {
//   container.classList.remove("change");
// });
