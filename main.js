import "./style.css";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import { Main, addMainListeners } from "./Components/Main/Main.js";
import { addAboutListeners } from "./Components/AboutMe/AboutMe.js";
import {addContactListeners} from "./Components/Contact/Contact.js";

const render = () => {
  document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
  `;
};

render();
addAboutListeners();
addMainListeners();
addContactListeners();
