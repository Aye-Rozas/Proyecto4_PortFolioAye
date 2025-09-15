import "./Header.css";

const navItems=[
  {label: "About me", href: "#aboutme" },
  {label:"Education", href:"#switcher"},
  {label:"Experience", href:"#switcher"},
  {label:"Projects",href:"#projects"},
  {label:"Contact",href:"#contact-section"},
]
const template = () => {
  return `
  <header>
    <h1>Ayelen Rozas</h1>
    <nav>
      <ul>
      ${navItems
.map((navItems)=>`
<li>
  <a href="${navItems.href}">${navItems.label}</a>
      </li>
      `
        )
        .join("")} 
    </nav>
  </header>
  `;
};

const Header = () => {
  return template();
};

export default Header;