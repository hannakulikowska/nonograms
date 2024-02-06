import { page } from "./page.module";
import { createElement } from "./page.module";
import { matrices } from "./matrix.module";
import { changeGameSize } from "./game.module";
import { resetTime, titleName, titleSize } from "./stopWatch.module";
import { continueButton, disabledButton } from "./buttons.module";

let dialog;
let dialogInnerBox;
let closeButton;

export function showDialog() {
  dialog.style.visibility = "visible";
  dialog.style.opacity = "1";
  dialog.showModal();
}

function closeDialog() {
  dialog.style.visibility = "hidden";
  dialog.style.opacity = "0";
  dialog.close();
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    closeDialog();
  }
}

export function createModal() {
  if (!dialog) {
    dialog = createElement("dialog", "dialog", page);
    dialogInnerBox = createElement("div", "dialog__inner-box", dialog);
    closeButton = createElement(
      "button",
      "dialog__close-button close-button",
      dialog
    );

    createElement("span", "close-button__item1", closeButton);
    createElement("span", "close-button__item2", closeButton);
  } else {
    dialogInnerBox.innerHTML = "";
  }

  // event listeners
  closeButton.addEventListener("click", closeDialog);
  window.addEventListener("keydown", handleKeyDown);

  showDialog();
}

export function displayPuzzleOptions(selectedSize) {
  const sizeNumber = parseInt(selectedSize.split("x")[0]);
  // find objects with selected sizes
  const puzzles = Object.values(matrices).filter(
    (matrix) => matrix.size === sizeNumber
  );

  // title
  createModalTitle(`Puzzle size: ${selectedSize}`);
  // wrapper for dropdown options
  const dialogTextWrapper = createElement(
    "div",
    "dialog__text",
    dialogInnerBox
  );

  // dropdown options
  let nameButton;
  puzzles.forEach((puzzle) => {
    nameButton = createElement(
      "button",
      "dialog__name",
      dialogTextWrapper,
      puzzle.name
    );

    nameButton.addEventListener("click", function () {
      openSelectedPuzzle(puzzle.size, puzzle.data);
      // update current puzzle title
      titleSize.innerHTML = `${puzzle.size}x${puzzle.size}`;
      titleName.innerHTML = puzzle.name;
      resetTime();
      // save current puzzle data to local storage - name and size
      localStorage.setItem(
        "currentPuzzle",
        JSON.stringify({ name: puzzle.name, size: puzzle.size })
      );
    });
  });
}

// Create a title
export function createModalTitle(text) {
  const modalTitle = createElement("h3", "dialog__title", dialogInnerBox, text);
  return modalTitle;
}

// Open selected puzzle by clicking a name button in the menu
function openSelectedPuzzle(size, puzzleData) {
  closeDialog();
  changeGameSize(size, puzzleData);
  let savedGame = JSON.parse(localStorage.getItem("savedGame"));
  // check if savedGame is not null
  if (savedGame) {
    disabledButton(continueButton, false);
  }
}
