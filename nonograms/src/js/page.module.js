import { createGameFields, createGameWrapper } from "./game.module";
import { createHeader } from "./header.module";
import { matrices } from "./matrix.module";
import { initializeUserMatrix } from "./userMatrix.module";
import { resetTime, titleName, titleSize } from "./stopWatch.module";
import { createButtons, disabledButton, saveButton } from "./buttons.module";

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
    titleSize.innerHTML = `${firstPuzzle.size}x${firstPuzzle.size}`;
    titleName.innerHTML = firstPuzzle.name;
    disabledButton(saveButton);
  }

  resetTime();
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
