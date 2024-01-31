import { createModal, createModalTitle } from "./modals.module";

// Additional acts to finish a game
export function finishGame() {
  // display all crosses on the game field
  setTimeout(() => {
    // find all cells and crosses of the game field
    const allCrosses1 = document.querySelectorAll(".game__cross1");
    const allCrosses2 = document.querySelectorAll(".game__cross2");
    const allCells = document.querySelectorAll(".game__game-cell");
    // remove crosses' classes with "opacity" modifier
    allCrosses1.forEach((cross) =>
      cross.classList.remove("game__cross_opacity")
    );
    allCrosses2.forEach((cross) =>
      cross.classList.remove("game__cross_opacity")
    );
    // inactive cells
    allCells.forEach((cell) => (cell.style.pointerEvents = "none"));
  }, 1000);

  // create modal to display information about winning the game
  setTimeout(() => {
    createModal();
    createModalTitle("Great! You have solved the nonogram!");
  }, 2000);
}
