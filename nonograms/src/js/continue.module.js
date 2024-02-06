import {
  continueButton,
  disabledButton,
  resetButton,
  saveButton,
} from "./buttons.module";
import { changeGameSize, cleanGameFields } from "./game.module";
import { matrices } from "./matrix.module";
import { startTime, titleName, titleSize } from "./stopWatch.module";
import { checkSolution, updateUserMatrix } from "./userMatrix.module";

export function clickContinueButton() {
  disabledButton(continueButton, true);
  disabledButton(resetButton, false);
  disabledButton(saveButton, false);
  // Retrieve data about saved game from Local Storage
  let savedGame = JSON.parse(localStorage.getItem("savedGame"));

  // check if savedGame is not null
  if (savedGame) {
    cleanGameFields();

    const initialMinutes = parseInt(savedGame.time.minutes, 10);
    const initialSeconds = parseInt(savedGame.time.seconds, 10);
    startTime(initialMinutes, initialSeconds);

    titleSize.innerHTML = `${savedGame.size}x${savedGame.size}`;
    titleName.innerHTML = savedGame.name;

    // Find puzzle by name in `matrices`
    const puzzlesArray = Object.values(matrices);
    const puzzle = puzzlesArray.find((p) => p.name === savedGame.name);

    if (puzzle) {
      const { size, data } = puzzle;
      changeGameSize(size, data);
      restoreGameField(savedGame.savedMatrix);
      updateUserMatrix(savedGame.savedMatrix);
      checkSolution(data);
    } else {
      disabledButton(continueButton, true);
    }
  } else {
    disabledButton(continueButton, true);
  }
}

// Go through the saved matrix and restore the state of the cells

function restoreGameField(savedMatrix) {
  for (let row = 0; row < savedMatrix.length; row++) {
    for (let col = 0; col < savedMatrix[row].length; col++) {
      if (savedMatrix[row][col] === 1) {
        const selector = `.game__game-cell[data-row="${row}"][data-col="${col}"]`;
        const cell = document.querySelector(selector);
        if (cell) {
          cell.classList.add("game__game-cell_active");
        }
      }
    }
  }
}
