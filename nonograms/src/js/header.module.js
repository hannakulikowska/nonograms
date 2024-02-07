import { createElement } from "./createElement.module";
import { createMenu } from "./menu.module";

export let headerWrapper;

export function createHeader(parentElement) {
  const header = createElement("div", "header", parentElement, null, true);
  headerWrapper = createElement("div", "header__wrapper", header);

  createElement("h1", "header__title", headerWrapper, "Nonogram");
  createMenu();
}
