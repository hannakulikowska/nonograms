import { minutesSpan, secondsSpan } from "./stopWatch.module.js";

export function resultsData() {
  // Retrieve puzzle data from Local Storage
  const currentPuzzle = JSON.parse(localStorage.getItem("currentPuzzle"));

  // Get time
  let gameTime = {
    minutes: minutesSpan.innerHTML,
    seconds: secondsSpan.innerHTML,
  };

  // Total time in seconds
  let totalInSeconds = Number(gameTime.minutes * 60) + Number(gameTime.seconds);

  // Get name and size of the current puzzle
  let puzzleName = currentPuzzle ? currentPuzzle.name : "Unknown";
  let puzzleSize = currentPuzzle ? currentPuzzle.size : "Unknown";

  // Retrieve existing results from Local Storage
  let existingResults = JSON.parse(localStorage.getItem("results")) || [];
  // Add the new game result
  existingResults.push({ gameTime, totalInSeconds, puzzleName, puzzleSize });
  // Save updated results to Local Storage
  localStorage.setItem("results", JSON.stringify(existingResults));
}
