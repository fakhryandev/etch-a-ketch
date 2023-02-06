const board = document.querySelector(".board");
const smallSize = 16;
const mediumSize = 32;
const bigSize = 64;

document.addEventListener("DOMContentLoaded", () => {
  const btnSmall = document.getElementById("small");
  btnSmall.classList.add("btn-active");
  board.style.gridTemplateColumns = `repeat(${smallSize}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${smallSize}, 1fr)`;

  createBoardItem(Math.pow(smallSize, 2));
});

const createBoardItem = (size) => {
  board.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const div = document.createElement("div");
    div.classList.add("board-tile");
    board.appendChild(div);
  }
};

const changeButton = (id) => {
  const buttonById = document.getElementById(id);

  buttonById.addEventListener("click", (e) => {
    const btn = document.getElementsByClassName("btn-active");
    btn[0].classList.remove("btn-active");
    buttonById.classList.add("btn-active");

    console.log(id);
    const newSize =
      id == "big" ? bigSize : id == "medium" ? mediumSize : smallSize;

    board.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
    createBoardItem(Math.pow(newSize, 2));
  });
};

const buttonSize = document.querySelectorAll("button.btn");
buttonSize.forEach((button) => {
  const id = button.id;
  changeButton(id);
});
