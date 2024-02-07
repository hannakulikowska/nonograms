import { createModal, createModalTitle } from "./modals.module";
import { createScoreButtons } from "./menu.module";
import { disabledButton, saveButton } from "./buttons.module";

// Additional acts to finish a game
export function finishGame() {
  // display all crosses on the game field
  setTimeout(() => {
    disabledButton(saveButton, true);
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
    createScoreButtons();

    createModal();
    // Retrieve the current puzzle from Local Storage
    const currentPuzzle = JSON.parse(localStorage.getItem("currentPuzzle"));

    const modalTitleElement = createModalTitle(
      `Great! You have solved the nonogram in ${currentPuzzle.totalTime} seconds!`
    );

    modalTitleElement.style.padding = "50px";
  }, 2000);
}
