import { createElement } from "./page.module";

export function createButtons(parentElement) {
  createElement(
    "button",
    "side-panel__button side-panel__reset-button",
    parentElement,
    "Reset"
  );
  createElement(
    "button",
    "side-panel__button side-panel__random-button",
    parentElement,
    "Random"
  );
  createElement(
    "button",
    "side-panel__button side-panel__save-button",
    parentElement,
    "Save game"
  );
  createElement(
    "button",
    "side-panel__button side-panel__continue-button",
    parentElement,
    "Continue game"
  );
  createElement(
    "button",
    "side-panel__button side-panel__theme-button",
    parentElement,
    "Dark theme"
  );
}
