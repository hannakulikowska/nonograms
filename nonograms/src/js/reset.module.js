import {
  continueButton,
  disabledButton,
  resetButton,
  saveButton,
} from "./buttons.module";
import { resetTime } from "./stopWatch.module";
import { getUserMatrix, initializeUserMatrix } from "./userMatrix.module";

export function clickResetButton() {
  const size = getUserMatrix().length;
  resetGameField(size);
  initializeUserMatrix(size);
  resetTime();
  disabledButton(saveButton, true);
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

  let savedGame = JSON.parse(localStorage.getItem("savedGame"));
  // check if savedGame is not null
  if (savedGame) {
    disabledButton(continueButton, false);
  }
  disabledButton(resetButton, true);
}

function updateOpacity(elements) {
  elements.forEach((element) => {
    element.classList.add("game__cross_opacity");
  });
}
