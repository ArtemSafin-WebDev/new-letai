import "virtual:svg-icons-register";
import "../scss/style.scss";
import tariffsSlider from "./tariffsSlider";
import menu from "./menu";
import modals from "./modals";
import forms from "./forms";

document.addEventListener("DOMContentLoaded", () => {
  tariffsSlider();
  menu();
  modals();
  forms();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
