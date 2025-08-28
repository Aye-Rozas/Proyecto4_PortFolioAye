import "./Header.css";

const template = () => {
  return `
  <header>
    <h1>Ayelen Rozas</h1>
    <nav>
      <ul>
        <li>
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  `;
};

const Header = () => {
  return template();
};

export default Header;
