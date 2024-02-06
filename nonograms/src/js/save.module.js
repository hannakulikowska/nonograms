// import { getUserMatrix } from "./userMatrix.module";
import { isWatchStarted, stopTime, titleName } from "./stopWatch.module";
import { continueButton, disabledButton, saveButton } from "./buttons.module";
import { clickResetButton } from "./reset.module";
import { gameTime } from "./results.module";

export function clickSaveButton() {
  if (!isWatchStarted()) {
    return;
  }

  stopTime();
  disabledButton(saveButton, true);

  const getTime = gameTime();

  const gameGrid = document.querySelector(".game__game-grid");
  const size = Math.sqrt(gameGrid.children.length);

  // Initialize a new matrix with zeroes
  let newMatrix = Array.from({ length: size }, () => Array(size).fill(0));

  document.querySelectorAll(".game__game-cell").forEach((cell, index) => {
    const row = Math.floor(index / size);
    const col = index % size;
    if (cell.classList.contains("game__game-cell_active")) {
      newMatrix[row][col] = 1;
    }
  });

  const puzzleName = titleName ? titleName.textContent : "Unknown";

  // Save the updated game state to localStorage
  localStorage.setItem(
    "savedGame",
    JSON.stringify({
      savedMatrix: newMatrix,
      time: getTime,
      name: puzzleName,
      size: size,
    })
  );

  clickResetButton();
  disabledButton(continueButton, false);
}

export function getSavedGameMatrix() {
  const savedGame = JSON.parse(localStorage.getItem("savedGame"));
  return savedGame && savedGame.savedMatrix ? savedGame.savedMatrix : [];
}
