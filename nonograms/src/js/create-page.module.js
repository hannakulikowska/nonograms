export function createPage() {
  document.body.className = "page";

  const pageWrapper = createElement(
    "div",
    "page__wrapper",
    document.body,
    null,
    true
  );

  const header = createElement("div", "header", pageWrapper);
  createElement("h1", "header__title", header, "Nonogram");
}

function createElement(type, className, parent, textContent, prepend = false) {
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
