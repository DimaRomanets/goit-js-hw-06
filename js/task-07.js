// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

document.querySelector("body").style.backgroundColor = "#008080";
const inputRangeRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");
const fontSizeControl = ({ currentTarget }) =>
  (textRef.style.fontSize = `${currentTarget.value}px`);

inputRangeRef.addEventListener("input", fontSizeControl);
