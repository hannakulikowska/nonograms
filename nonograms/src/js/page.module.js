import { createGameFields, createGameWrapper } from "./game.module";
import { createHeader } from "./header.module";
import { matrices } from "./matrix.module";

export { page };

const page = document.body;

export function createPage(size) {
  page.className = "page";
  createHeader(page);

  const pageWrapper = createElement("div", "page__wrapper", page);

  const mainContent = createElement("div", "main-content", pageWrapper);

  createElement(
    "div",
    "main-content__control-panel control-panel",
    mainContent
  );

  createGameWrapper(mainContent);

  const firstPuzzle = Object.values(matrices).find(
    (puzzle) => puzzle.size === size
  );

  if (firstPuzzle) {
    createGameFields(size, firstPuzzle.data);
  }
}

// Create element
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
