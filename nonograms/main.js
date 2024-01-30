import "./src/scss/style.scss";
import { createPage } from "./src/js/page.module";

export const gameSizes = ["5x5", "10x10", "15x15"];

// Initial game size
document.addEventListener("DOMContentLoaded", function () {
  createPage(5);
});
