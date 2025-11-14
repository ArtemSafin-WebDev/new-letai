import "virtual:svg-icons-register";
import "../scss/style.scss";
import tariffsSlider from "./tariffsSlider";
import menu from "./menu";
import modals from "./modals";
import forms from "./forms";
// import vacancies from "./vacancies";
import bitrixForms from "./bitrixForms";

document.addEventListener("DOMContentLoaded", () => {
  tariffsSlider();
  menu();
  modals();
  forms();
  bitrixForms();
  // vacancies();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
