import { createElement } from "./page.module";
import { createModal } from "./modals.module";
import { gameSizes } from "../../main";

export let dropdownWrapper;
let menuItem;

// Menu Item (eg. "Select puzzle")
export function createMenuItem(parentElement, text) {
  menuItem = createElement("li", "menu__item", parentElement, text);
}

// Dropdown options
export function createDropdown() {
  dropdownWrapper = createElement("ul", "menu__dropdown-wrapper", menuItem);

  gameSizes.forEach((option) => {
    const dropdownItem = createElement(
      "li",
      "menu__dropdown-item",
      dropdownWrapper
    );
    createElement("button", "menu__dropdown-button", dropdownItem, option);

    dropdownItem.addEventListener("click", function () {
      console.log(`Clicked ${option}`);
      createModal(option);
    });
  });
}
