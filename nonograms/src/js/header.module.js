import { createElement } from "./page.module";

export let menu;

export function createHeader(parentElement) {
  const header = createElement("div", "header", parentElement, null, true);
  const headerWrapper = createElement("div", "header__wrapper", header);

  createElement("h1", "header__title", headerWrapper, "Nonogram");
  menu = createElement("menu", "header__menu menu", headerWrapper);
}
