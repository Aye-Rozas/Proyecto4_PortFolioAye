import "./Main.css";
import { AboutMe } from "../AboutMe/AboutMe.js";
import Education from "../Education/Education.js";
import Experience from "../Experience/Experience.js";
import Projects from "../Projects/Projects.js";
import Contact  from "../Contact/Contact.js";

let show = "Experience";

const template = () => {
  return `
  <main>
    ${AboutMe()}
    <div class="info-switcher">
      <button id="switcher">Show ${show}</button>
    </div>
    <div id="info">
      ${Education()}
    </div>
    ${Projects()}
    ${Contact()}
  </main>
  `;
};

export const Main = () => {
  return template();
};

export const addMainListeners = () => {
  const button = document.querySelector("#switcher");

  button.addEventListener("click", () => {
    const info = document.querySelector("#info");

    if (show === "Experience") {
      info.innerHTML = `${Experience()}`;
      show = "Education";
    } else {
      info.innerHTML = `${Education()}`;
      show = "Experience";
    }
    button.textContent = `Show ${show}`;

  })
};