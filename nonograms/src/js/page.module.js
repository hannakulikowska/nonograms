import { createGameFields, createGameWrapper } from "./game.module";
import { createHeader } from "./header.module";
import { matrices } from "./matrix.module";
import { initializeUserMatrix } from "./userMatrix.module";
import {
  createCurrentPuzzleTitle,
  resetTime,
  stopWatch,
} from "./stopWatch.module";
import {
  continueButton,
  createButtons,
  disabledButton,
  resetButton,
  saveButton,
} from "./buttons.module";

export { page };

const page = document.body;
export let sidePanel;

// Create page *** START

export function createPage(size) {
  // page

  page.className = "page";
  createHeader(page);

  const pageWrapper = createElement("div", "page__wrapper", page);

  const mainContent = createElement("div", "main-content", pageWrapper);

  // side panel

  sidePanel = createElement(
    "div",
    "main-content__side-panel side-panel",
    mainContent
  );

  createButtons(sidePanel);

  // game

  createGameWrapper(mainContent);

  const firstPuzzle = Object.values(matrices).find(
    (puzzle) => puzzle.size === size
  );

  if (firstPuzzle) {
    createGameFields(size, firstPuzzle.data);
    initializeUserMatrix(size);
    // save data about first puzzle to Local Storage - name and size
    localStorage.setItem(
      "currentPuzzle",
      JSON.stringify({ name: firstPuzzle.name, size: firstPuzzle.size })
    );

    createCurrentPuzzleTitle(stopWatch, firstPuzzle.name, firstPuzzle.size);

    disabledButton(saveButton, true);

    // Retrieve data about saved game from Local Storage
    let savedGame = JSON.parse(localStorage.getItem("savedGame"));
    // check if savedGame is not null
    if (!savedGame) {
      disabledButton(continueButton, true);
    }
  }

  resetTime();
  disabledButton(resetButton, true);
}

// Create page *** END

// Create element *** START

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

// Create element *** END
