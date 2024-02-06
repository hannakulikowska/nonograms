import { createElement } from "./page.module";
import { clickSaveButton } from "./save.module";
import { clickContinueButton } from "./continue.module";
import { clickResetButton } from "./reset.module";
import { clickRandomButton } from "./random.module";

export let resetButton;
export let randomButton;
export let saveButton;
export let continueButton;

export function createButtons(parentElement) {
  resetButton = createElement(
    "button",
    "side-panel__button side-panel__reset-button",
    parentElement,
    "Reset"
  );
  randomButton = createElement(
    "button",
    "side-panel__button side-panel__random-button",
    parentElement,
    "Random"
  );
  saveButton = createElement(
    "button",
    "side-panel__button side-panel__save-button",
    parentElement,
    "Save game"
  );
  continueButton = createElement(
    "button",
    "side-panel__button side-panel__continue-button",
    parentElement,
    "Continue saved game"
  );
  createElement(
    "button",
    "side-panel__button side-panel__theme-button",
    parentElement,
    "Dark theme"
  );

  // Event listeners for all buttons
  resetButton.addEventListener("click", clickResetButton);
  randomButton.addEventListener("click", clickRandomButton);
  saveButton.addEventListener("click", clickSaveButton);
  continueButton.addEventListener("click", clickContinueButton);
}

// Disabled buttons

export function disabledButton(button, state = true) {
  button.disabled = state;
}
