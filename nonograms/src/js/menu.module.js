import { createElement } from "./page.module";
import { createModal, displayPuzzleOptions } from "./modals.module";
import { gameSizes } from "../../main";

export let dropdownWrapper;
export let menuItem;

// Menu Item (eg. "Select puzzle")
export function createMenuItem(parentElement, text) {
  menuItem = createElement("li", "menu__item", parentElement, text);
}

// Dropdown options
export function createDropdown(parentElement) {
  dropdownWrapper = createElement(
    "ul",
    "menu__dropdown-wrapper",
    parentElement
  );
}

// Dropdown "Select puzzle"

export function dropdownSelectPuzzle() {
  gameSizes.forEach((option) => {
    const dropdownItem = createElement(
      "li",
      "menu__dropdown-item",
      dropdownWrapper
    );
    widthComparison(menuItem, dropdownItem);
    createElement("button", "menu__dropdown-button", dropdownItem, option);

    dropdownItem.addEventListener("click", function () {
      createModal();
      displayPuzzleOptions(option);
    });
  });
}

// Dropdown "Score"

export const time = [];

export function dropdownScore() {
  time.forEach((result) => {
    const dropdownItem = createElement(
      "li",
      "menu__dropdown-item",
      dropdownWrapper
    );

    createElement("div", "menu__dropdown-button", dropdownItem, result);
  });
}

function widthComparison(elem1, elem2) {
  const maxWidth = Math.max(elem1.offsetWidth, elem2.offsetWidth);

  // set max width for both elements
  elem1.style.width = `${maxWidth}px`;
  elem2.style.width = `${maxWidth}px`;
}
