const board = document.querySelector(".board");
const smallSize = 16;
const mediumSize = 32;
const bigSize = 64;

document.addEventListener("DOMContentLoaded", () => {
  const btnSmall = document.getElementById("small");
  btnSmall.classList.add("btn-active");
  board.style.gridTemplateColumns = `repeat(${smallSize}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${smallSize}, 1fr)`;

  createBoardItem(smallSize);
});

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const createBoardItem = (size) => {
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

const changeColor = (e) => {
  if (e.type === "mouseover" && !mouseDown) return;

  e.target.style.backgroundColor = "#000";
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

    const newSize =
      id == "big" ? bigSize : id == "medium" ? mediumSize : smallSize;

    clearGrid();
    createBoardItem(newSize);
  });
};

const buttonSize = document.querySelectorAll("button.btn");
buttonSize.forEach((button) => {
  const id = button.id;
  changeButton(id);
});
