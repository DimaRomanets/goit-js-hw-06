// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
document.querySelector("body").style.backgroundColor = "#cfd1e1";

const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== "") {
    nameRef.textContent = currentTarget.value.trim();
  } else {
    nameRef.textContent = "Anonymous";
  }
};

inputRef.addEventListener("input", getInputValue);
