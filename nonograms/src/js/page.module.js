import { createGameFields } from "./game.module";

export { topNumGrid, leftNumGrid, gameGrid };

let topNumGrid;
let leftNumGrid;
let gameGrid;

export function createPage(size) {
  document.body.className = "page";

  const pageWrapper = createElement(
    "div",
    "page__wrapper",
    document.body,
    null,
    true
  );

  const header = createElement("div", "header", pageWrapper);
  createElement("h1", "header__title", header, "Nonogram");

  const gameWrapper = createElement("div", "game", pageWrapper);
  topNumGrid = createElement("div", "game__top-num-grid", gameWrapper);
  leftNumGrid = createElement("div", "game__left-num-grid", gameWrapper);
  gameGrid = createElement("div", "game__game-grid", gameWrapper);

  size = 15;
  createGameFields(size);
}

export function createElement(
  type,
  className,
  parent,
  textContent,
  prepend = false
) {
  const element = document.createElement(type);
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (parent) {
    if (prepend && parent.firstChild) {
      parent.insertBefore(element, parent.firstChild);
    } else {
      parent.appendChild(element);
    }
  }
  return element;
}
