import { minutesSpan, secondsSpan } from "./stopWatch.module.js";

export function resultsData() {
  const gameTimer = gameTime();
  const totalInSeconds = totalSeconds(gameTimer);

  // Retrieve puzzle data from Local Storage
  const currentPuzzle = JSON.parse(localStorage.getItem("currentPuzzle"));

  // Get name and size of the current puzzle
  let puzzleName = currentPuzzle ? currentPuzzle.name : "Unknown";
  let puzzleSize = currentPuzzle ? currentPuzzle.size : "Unknown";

  // Retrieve existing results from Local Storage
  let existingResults = JSON.parse(localStorage.getItem("results")) || [];
  // Add the new game result
  existingResults.push({
    gameTime: gameTimer,
    totalInSeconds,
    puzzleName,
    puzzleSize,
  });
  // Save updated results to Local Storage
  localStorage.setItem("results", JSON.stringify(existingResults));
}

export function gameTime() {
  // Get time
  let gameTime = {
    minutes: minutesSpan.innerHTML,
    seconds: secondsSpan.innerHTML,
  };
  return gameTime;
}

function totalSeconds() {
  // Get gameTime.minutes and getTime.seconds
  let { minutes, seconds } = gameTime();
  // Total time in seconds
  let totalInSeconds = Number(minutes * 60) + Number(seconds);
  return totalInSeconds;
}
