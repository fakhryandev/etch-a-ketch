const board = document.querySelector(".board");
const smallSize = 16;
const mediumSize = 32;
const bigSize = 64;

let currentSize = smallSize;
let currentMode = "color";

document.addEventListener("DOMContentLoaded", () => {
  const btnSmall = document.getElementById("small");
  btnSmall.classList.add("btn-active");
  board.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;

  createBoardItem(currentSize);
});

const clearButton = document.getElementById("clearButton");
const eraserButton = document.getElementById("eraserButton");
const colorButton = document.getElementById("colorButton");
const rainbowButton = document.getElementById("rainbowButton");

clearButton.addEventListener("click", (e) => {
  createBoardItem(currentSize);
});

eraserButton.addEventListener("click", (e) => {
  setCurrentMode("eraser");
});

colorButton.addEventListener("click", (e) => {
  setCurrentMode("color");
});

rainbowButton.addEventListener("click", (e) => {
  setCurrentMode("rainbow");
});

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const createBoardItem = (size) => {
  clearGrid();
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("board-tile");
    div.addEventListener("mouseover", changeColor);
    div.addEventListener("mousedown", changeColor);
    board.appendChild(div);
  }
};

const setCurrentMode = (mode) => {
  currentMode = mode;
};

const changeColor = (e) => {
  if (e.type === "mouseover" && !mouseDown) return;

  if (currentMode === "color") {
    e.target.style.backgroundColor = "#000";
  } else if (currentMode === "rainbow") {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "transparent";
  }
};

const clearGrid = () => {
  board.innerHTML = "";
};

const changeButtonActive = (buttonById) => {
  const btn = document.getElementsByClassName("btn-active");
  btn[0].classList.remove("btn-active");
  buttonById.classList.add("btn-active");
};

const changeButton = (id) => {
  const buttonById = document.getElementById(id);

  buttonById.addEventListener("click", (e) => {
    changeButtonActive(buttonById);

    currentSize =
      id == "big" ? bigSize : id == "medium" ? mediumSize : smallSize;

    createBoardItem(currentSize);
  });
};

const buttonSize = document.querySelectorAll("button.btn-size");
buttonSize.forEach((button) => {
  const id = button.id;
  changeButton(id);
});
