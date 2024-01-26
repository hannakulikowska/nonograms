import { createGameFields, createGameWrapper } from "./game.module";
import {
  createMenuItem,
  createDropdownOptions,
  optionsWrapper,
} from "./menu.module";
import { createHeader, menu } from "./header.module";

export { page };

const page = document.body;
const gameSizes = ["5x5", "10x10", "15x15"];

export function createPage(size) {
  size = 15;

  page.className = "page";
  createHeader(page);
  createMenuItem(menu, "Game sizes"); // Header Menu: Game sizes
  createDropdownOptions(optionsWrapper, gameSizes);

  const pageWrapper = createElement("div", "page__wrapper", page);

  const mainContent = createElement("div", "main-content", pageWrapper);
  createElement(
    "div",
    "main-content__control-panel control-panel",
    mainContent
  );

  createGameWrapper(mainContent);
  createGameFields(size);
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
