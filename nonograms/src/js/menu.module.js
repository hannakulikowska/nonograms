import { createElement } from "./page.module";
import { changeGameSize } from "./game.module";
export let optionsWrapper;

// Menu Item

export function createMenuItem(parentElement, text) {
  // Menu: Game sizes
  const menuItem = createElement("li", "menu__item", parentElement);
  createElement("button", "menu__dropdown-button", menuItem, text);
  optionsWrapper = createElement("div", "menu__options-wrapper", menuItem);
}

// Dropdown options

export function createDropdownOptions(parentElement, options) {
  options.forEach((option, index) => {
    // labels
    const label = createElement(
      "label",
      "menu__dropdown-option",
      parentElement,
      option
    );

    // radiobuttons in labels
    const input = createElement("input", "menu__option-input", label);
    input.setAttribute("type", "radio");
    input.setAttribute("name", "gameSize");
    input.setAttribute("value", option); // value depending on option

    if (index === 0) {
      input.checked = true;
    }

    input.addEventListener("change", function () {
      if (this.checked) {
        changeGameSize(this.value);
      }
    });
  });
}
