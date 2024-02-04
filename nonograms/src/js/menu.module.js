import { createElement } from "./page.module";
import { createModal, displayPuzzleOptions } from "./modals.module";
import { gameSizes } from "../../main";
import { headerWrapper } from "./header.module";

let menuScore;
let menuSelectPuzzle;
let menu;
let scoreDropdownWrapper;
let selectPuzzleDropdownWrapper;

export function createMenu() {
  menu = createElement("menu", "header__menu menu", headerWrapper); // create <menu> in header

  // Create "Score" in <menu> in <header>
  menuScore = createElement("li", "menu__item menu__score", menu, "Score");

  scoreDropdownWrapper = createElement(
    "ul",
    "menu__dropdown-wrapper",
    menuScore
  );
  createScoreButtons();

  // Create "Select Puzzle" in <menu> in <header>
  menuSelectPuzzle = createElement(
    "li",
    "menu__item menu__select-puzzle",
    menu,
    "Select Puzzle"
  );

  selectPuzzleDropdownWrapper = createElement(
    "ul",
    "menu__dropdown-wrapper",
    menuSelectPuzzle
  );

  createSelectPuzzleButtons();
}

// Dropdown "Select puzzle"

function createSelectPuzzleButtons() {
  gameSizes.forEach((option) => {
    const selectPuzzleElement = createElement(
      "li",
      "menu__dropdown-item",
      selectPuzzleDropdownWrapper
    );

    widthComparison(menuSelectPuzzle, selectPuzzleElement);

    createElement(
      "button",
      "menu__dropdown-button",
      selectPuzzleElement,
      option
    );

    selectPuzzleElement.addEventListener("click", function () {
      createModal();
      displayPuzzleOptions(option);
    });
  });
}

// Dropdown "Score"

export function createScoreButtons() {
  // Retrieve existing results from Local Storage
  const results = JSON.parse(localStorage.getItem("results")) || [];

  // Clear existing content in the dropdown to prevent duplication
  scoreDropdownWrapper.innerHTML = "";

  if (results.length === 0) {
    const scoreElement = createElement(
      "li",
      "menu__dropdown-item menu__dropdown-item_no-data",
      scoreDropdownWrapper
    );
    createElement(
      "div",
      "menu__dropdown-button menu__dropdown-button_no-data",
      scoreElement,
      "No results yet"
    );
  } else {
    results
      .slice(-5)
      .sort((a, b) => a.totalInSeconds - b.totalInSeconds)
      .forEach((result, i) => {
        if (i < 5) {
          const dropdownItem = createElement(
            "li",
            "menu__dropdown-item",
            scoreDropdownWrapper
          );

          createElement(
            "div",
            "menu__dropdown-button",
            dropdownItem,
            `${result.puzzleName} ${result.puzzleSize}x${result.puzzleSize} in ${result.gameTime.minutes}:${result.gameTime.seconds}`
          );
        }
      });
  }
}

// Comparison width of two elements and choose the max/min width

function widthComparison(elem1, elem2, comparisonType = "max") {
  let width;
  if (comparisonType === "max") {
    width = Math.max(elem1.offsetWidth, elem2.offsetWidth);
  } else if (comparisonType === "min") {
    width = Math.min(elem1.offsetWidth, elem2.offsetWidth);
  }
  // Set width for both elements based on comparisonType
  elem1.style.width = `${width}px`;
  elem2.style.width = `${width}px`;
}
