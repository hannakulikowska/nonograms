import { topNumGrid, leftNumGrid, gameGrid } from "./page.module";
import { createElement } from "./page.module";

export function createGameFields(size) {
  // Get `color-main` value
  const colorMain = getComputedStyle(document.documentElement).getPropertyValue(
    "color-main"
  );

  // Top numbers grid
  for (let i = 0; i < 5 * size; i++) {
    const number = createElement("div", "game__number-cell", topNumGrid);

    if ((i + 1) % size !== 0 && (i + 1) % 5 === 0) {
      number.style.borderRight = `1px solid ${colorMain}`;
    }
  }

  // Left numbers grid
  for (let i = 0; i < 5 * size; i++) {
    const number = createElement("div", "game__number-cell", leftNumGrid);

    if (i < size * 5 - size && Math.floor(i / 5) % 5 === 4) {
      number.style.borderBottom = `1px solid ${colorMain}`;
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
}
