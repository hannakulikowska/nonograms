import "./src/scss/style.scss";
import { createPage } from "./src/js/page.module";

// Initial game size
document.addEventListener("DOMContentLoaded", function () {
  createPage(5);
});
