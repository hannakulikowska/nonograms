import { getUserMatrix } from "./userMatrix.module";
import { isWatchStarted, stopTime } from "./stopWatch.module";
import { clickResetButton, disabledButton, saveButton } from "./buttons.module";
import { gameTime } from "./results.module";

export function clickSaveButton() {
  const getTime = gameTime();
  const matrix = getUserMatrix();
  // Retrieve puzzle data from Local Storage
  const currentPuzzle = JSON.parse(localStorage.getItem("currentPuzzle"));

  if (isWatchStarted()) {
    stopTime();

    localStorage.setItem(
      "savedGame",
      JSON.stringify({
        savedUserGame: matrix,
        time: getTime,
        name: currentPuzzle.name,
        size: currentPuzzle.size,
      })
    );

    clickResetButton();
  } else {
    disabledButton(saveButton);
  }
}
