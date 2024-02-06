import { changeGameSize } from "./game.module";
import { matrices } from "./matrix.module";
import { clickResetButton } from "./reset.module";
import { titleName, titleSize } from "./stopWatch.module";

export function clickRandomButton() {
  clickResetButton();

  const puzzle = getRandomPuzzle();
  changeGameSize(puzzle.size, puzzle.data);

  // update current puzzle title
  titleSize.innerHTML = `${puzzle.size}x${puzzle.size}`;
  titleName.innerHTML = puzzle.name;

  // Update current puzzle information in Local Storage
  localStorage.setItem(
    "currentPuzzle",
    JSON.stringify({
      name: puzzle.name,
      size: puzzle.size,
      totalTime: 0,
    })
  );
}

function getRandomPuzzle() {
  const keys = Object.keys(matrices);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return matrices[randomKey];
}
