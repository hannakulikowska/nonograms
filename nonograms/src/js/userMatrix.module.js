import { finishGame } from "./finishGame.module";
import { stopTime } from "./stopWatch.module";

let userMatrix = [];

// Initialize userMatrix with zeros at the beginning of the game
export function initializeUserMatrix(size) {
  userMatrix = Array(size)
    .fill()
    .map(() => Array(size).fill(0));
  console.log("userMatrix:", userMatrix);
}

// Handle click on cells
export function handleCellClick(row, col) {
  userMatrix[row][col] = userMatrix[row][col] === 1 ? 0 : 1;
  console.log("Update userMatrix", userMatrix);
}

// Comparison of userMatrix with the original matrix
export function checkSolution(puzzleData) {
  if (arraysAreEqual(userMatrix, puzzleData)) {
    console.log("Great! You have solved the nonogram!");
    stopTime();
    finishGame();
  }
}

function arraysAreEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i][j] !== arr2[i][j]) return false;
    }
  }
  return true;
}
