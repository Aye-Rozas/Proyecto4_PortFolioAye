import data from '../data/data.js';
import './AboutMe.css';

const template = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>About me</h2>
      <div class="aboutme-content">
      <img class="avatar" src=${data.avatar} alt=${data.name}/>
      <p>${data.aboutMe}</p>
      </div>
      <ul class="Skills">
      ${data.skills
.map((skills)=>`
<li class="skillsItem">
        <img src=${skills.icon} alt=${skills.name} class="skillsIcon"/>
        <h3>${skills.name}</h3>
      </li>
      `
        )
        .join("")}
    </ul>
    </section>
  `;
};

export const AboutMe = () => {
  return template();
};

export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar');

  avatar.addEventListener('click', (e) => e.target.classList.toggle('rotate'));
};

/* 
${data.skills
.map
<li>
        <img src=${project.icon} alt=${project.name}/>
        <h3>${project.name}</h3>
      </li>
      `
        )
        .join("")}
*/

/* 
    <li><img src="./src/assets/html.png" alt="html-icon" class="skillsIcon"/></li>
    <li><img src="./src/assets/javascript.png" alt="javascript-icon" class="skillsIcon"/></li>
    <li><img src="./src/assets/vsc.png" alt="vsc-icon" class="skillsIcon"/></li>
    <li><img src="./src/assets/nodo-js.png" alt="nodejs-icon" class="skillsIcon"/></li>
    <li><img src="./src/assets/github.png" alt="github-icon" class="skillsIcon"/></li>
    <li><img src="./src/assets/css3.png" alt="css3-icon" class="skillsIcon"/></li>
    <li><img src="./src/assets/figma.png" alt="figma-icon" class="skillsIcon"/></li>*/