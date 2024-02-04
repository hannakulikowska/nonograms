import { createElement } from "./page.module";
import { resetTime } from "./stopWatch.module";
import { initializeUserMatrix, getUserMatrix } from "./userMatrix.module";

let resetButton;
let size;

export function createButtons(parentElement) {
  resetButton = createElement(
    "button",
    "side-panel__button side-panel__reset-button",
    parentElement,
    "Reset"
  );
  createElement(
    "button",
    "side-panel__button side-panel__random-button",
    parentElement,
    "Random"
  );
  createElement(
    "button",
    "side-panel__button side-panel__save-button",
    parentElement,
    "Save game"
  );
  createElement(
    "button",
    "side-panel__button side-panel__continue-button",
    parentElement,
    "Continue game"
  );
  createElement(
    "button",
    "side-panel__button side-panel__theme-button",
    parentElement,
    "Dark theme"
  );

  // Event listeners for all buttons
  resetButton.addEventListener("click", clickResetButton);
}

function clickResetButton() {
  size = getUserMatrix().length;
  resetGameField(size);
  initializeUserMatrix(size);
  resetTime();
}

function resetGameField() {
  const cells = document.querySelectorAll(".game__game-cell");
  const crosses1 = document.querySelectorAll(".game__cross1");
  const crosses2 = document.querySelectorAll(".game__cross2");

  cells.forEach((cell) => {
    cell.classList.remove("game__game-cell_active");
  });

  updateOpacity(crosses1);
  updateOpacity(crosses2);
}

function updateOpacity(elements) {
  elements.forEach((element) => {
    element.classList.add("game__cross_opacity");
  });
}
