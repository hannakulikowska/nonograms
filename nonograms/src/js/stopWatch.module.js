import { gameWrapper } from "./game.module";
import { createElement } from "./page.module";

export let stopWatch;
export let minutesSpan;
export let secondsSpan;

export let titleSize;
export let titleName;

export function insertStopWatchElement() {
  // Wrapper
  stopWatch = createElement("div", "game__stop-watch stop-watch", gameWrapper);

  createCurrentPuzzleTitle(stopWatch);

  // Stop-watch
  minutesSpan = createElement("span", "stop-watch__minutes", stopWatch, "00");
  secondsSpan = createElement("span", "stop-watch__seconds", stopWatch, "00");

  const colonTextNode = document.createTextNode(":");
  minutesSpan.parentNode.insertBefore(colonTextNode, secondsSpan);
}

let minutes = 0;
let seconds = 0;
let interval;

export function timeLogic() {
  seconds++;

  if (seconds > 59) {
    minutes++;
    seconds = 0;
  }

  secondsSpan.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  minutesSpan.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
}

let isWatchTimeStarted = false;

export function startTime(initialMinutes = 0, initialSeconds = 0) {
  if (!isWatchTimeStarted) {
    minutes = initialMinutes;
    seconds = initialSeconds;

    updateDisplayTime();

    interval = setInterval(timeLogic, 1000);
    isWatchTimeStarted = true;
  }
}

function updateDisplayTime() {
  secondsSpan.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  minutesSpan.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
}

// Stop stop-watch and save time of the current game
export const stopTime = () => {
  clearInterval(interval);
};

// Check if stop-watch
export const isWatchStarted = () => {
  return isWatchTimeStarted;
};

export const saveTime = () => {
  // Retrieve the current puzzle from Local Storage
  const currentPuzzle = JSON.parse(localStorage.getItem("currentPuzzle"));
  // Add time to the currentPuzzle object
  currentPuzzle.totalTime =
    Number(minutesSpan.innerHTML * 60) + Number(secondsSpan.innerHTML);
  // Save the updated object back to localStorage
  localStorage.setItem("currentPuzzle", JSON.stringify(currentPuzzle));
};

export const resetTime = () => {
  seconds = 0;
  minutes = 0;

  updateDisplayTime();

  clearInterval(interval);
  isWatchTimeStarted = false;
};

// Current puzzle title - size and name

export function createCurrentPuzzleTitle(parentElement) {
  // Remove existing titles
  const existingTitles = parentElement.querySelectorAll(".stop-watch__title");
  existingTitles.forEach((title) => title.remove());

  // Get name and size of the current puzzle from Local Storage
  const currentPuzzle = JSON.parse(localStorage.getItem("currentPuzzle"));
  const puzzleName = currentPuzzle.name;
  const puzzleSize = currentPuzzle.size;

  // Create new titles for current puzzle
  titleSize = createElement(
    "h3",
    "stop-watch__title stop-watch__title_size",
    parentElement,
    `${puzzleSize}x${puzzleSize}`
  );

  titleName = createElement(
    "h3",
    "stop-watch__title stop-watch__title_name",
    parentElement,
    puzzleName
  );
}
