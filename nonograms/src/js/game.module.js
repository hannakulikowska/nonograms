import { createElement } from "./page.module";
import { matrix } from "./matrix.module";
import { transformAndInvertMatrix } from "./topMatrix.module";
import { transformLeftMatrix } from "./leftMatrix.module";

export let topNumGrid;
export let leftNumGrid;
let gameGrid;
export let newSize;

export function changeGameSize(size) {
  // Extract size from value of the menu radiobutton
  newSize = parseInt(size.split("x")[0]);

  // Resize window
  resizeHandler();
  window.addEventListener("resize", () => resizeHandler());

  // Clean game field
  topNumGrid.innerHTML = "";
  leftNumGrid.innerHTML = "";
  gameGrid.innerHTML = "";

  // Create new game fild with new selected size
  createGameFields(newSize);
}

export function applyResponsiveStyles(newSize, cellSize, cellSizeSmall) {
  const mediaQuery = window.matchMedia("(max-width: 668px)");

  if (mediaQuery.matches) {
    topNumGrid.style.gridTemplateRows = `repeat(5, ${cellSizeSmall}px)`;
    topNumGrid.style.gridTemplateColumns = `repeat(${newSize}, ${cellSizeSmall}px)`;
    leftNumGrid.style.gridTemplateRows = `repeat(${newSize}, ${cellSizeSmall}px)`;
    leftNumGrid.style.gridTemplateColumns = `repeat(5, ${cellSizeSmall}px)`;
    gameGrid.style.gridTemplateRows = `repeat(${newSize}, ${cellSizeSmall}px)`;
    gameGrid.style.gridTemplateColumns = `repeat(${newSize}, ${cellSizeSmall}px)`;
  } else {
    topNumGrid.style.gridTemplateRows = `repeat(5, ${cellSize}px)`;
    topNumGrid.style.gridTemplateColumns = `repeat(${newSize}, ${cellSize}px)`;
    leftNumGrid.style.gridTemplateRows = `repeat(${newSize}, ${cellSize}px)`;
    leftNumGrid.style.gridTemplateColumns = `repeat(5, ${cellSize}px)`;
    gameGrid.style.gridTemplateRows = `repeat(${newSize}, ${cellSize}px)`;
    gameGrid.style.gridTemplateColumns = `repeat(${newSize}, ${cellSize}px)`;
  }
}

// Wrap the functions with parameters
function resizeHandler() {
  applyResponsiveStyles(newSize, 32, 20);
}

// Create all game fields
export function createGameFields(size) {
  const colorMain = "#454545";

  // Top numbers grid
  const topNumGridCells = [];
  for (let i = 0; i < 5 * size; i++) {
    const number = createElement("div", "game__number-cell", topNumGrid);
    topNumGridCells.push(number);

    if ((i + 1) % size !== 0 && (i + 1) % 5 === 0) {
      number.style.borderRight = `1px solid ${colorMain}`;
    }
  }
  const invertedMatrix = transformAndInvertMatrix(matrix);
  // Set invertedMatrix into topNumGrid cells
  for (let row = 0; row < invertedMatrix.length; row++) {
    for (let col = 0; col < invertedMatrix[row].length; col++) {
      const cellIndex = row * size + col;
      // check if a value is zero
      if (invertedMatrix[row][col] !== 0) {
        topNumGridCells[cellIndex].textContent = invertedMatrix[row][col];
      }
    }
  }

  // Left numbers grid
  const leftNumGridCells = [];
  for (let i = 0; i < 5 * size; i++) {
    const number = createElement("div", "game__number-cell", leftNumGrid);
    leftNumGridCells.push(number);

    if (i < size * 5 - size && Math.floor(i / 5) % 5 === 4) {
      number.style.borderBottom = `1px solid ${colorMain}`;
    }
  }
  const transformedLeftMatrix = transformLeftMatrix(matrix);
  for (let row = 0; row < transformedLeftMatrix.length; row++) {
    for (let col = 0; col < transformedLeftMatrix[row].length; col++) {
      const cellIndex = row * 5 + col;
      // check if a value is zero
      if (transformedLeftMatrix[row][col] !== 0) {
        leftNumGridCells[cellIndex].textContent =
          transformedLeftMatrix[row][col];
      }
    }
  }

  // Game field
  for (let i = 0; i < size * size; i++) {
    const cell = createElement("div", "game__game-cell", gameGrid);

    if ((i + 1) % size !== 0 && (i + 1) % 5 === 0) {
      cell.style.borderRight = `1px solid ${colorMain}`;
    }

    if (i < size * size - size && Math.floor(i / size) % 5 === 4) {
      cell.style.borderBottom = `1px solid ${colorMain}`;
    }

    cell.addEventListener("click", () =>
      cell.classList.toggle("game__game-cell_active")
    );
  }
  console.log("Matrix:", matrix);
}

export function createGameWrapper(parentElement) {
  const gameWrapper = createElement(
    "div",
    "main-content__game game",
    parentElement
  );
  topNumGrid = createElement("div", "game__top-num-grid", gameWrapper);
  leftNumGrid = createElement("div", "game__left-num-grid", gameWrapper);
  gameGrid = createElement("div", "game__game-grid", gameWrapper);
}
