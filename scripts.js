const board = document.querySelector(".board");

const createBoardItem = (size) => {
  for (let i = 0; i < size; i++) {
    const div = document.createElement("div");
    div.classList.add("board-item");
    board.appendChild(div);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  createBoardItem(8 * 8);
});
