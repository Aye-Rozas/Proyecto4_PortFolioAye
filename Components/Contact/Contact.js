import "./Contact.css";

const template=() =>{
  return `
  <section class="contact-section" id="contact-section">
  <div class="contactLeft">
  <h2>Ready to transform your idea into something real? Let’s start today.</h2>
  <img src="/public/assets/contact.jpg" alt="contact-icon" class="contactAnimation"/></div>
  <div class="contactRight">
  <form action="#" method="post" class="contact-form">
  <label for="name">Your Name</label>
  <input type="text" id="name" name="name"required>
  <label for="email">Your Email</label>
  <input type="text" id="email" name="email"required>
  <label for="message">Your Message</label>
  <textarea id="message" name="message" rows="5" required></textarea>
  <button type="submit" class="buttonContact">✈ Submit </button> </div>
    `
}
const Contact = () => {
  return template();
};

export const addContactListeners=()=>{
  const form=document.querySelector(".contact-form");
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("✅ Message sent!");
    form.reset();
});}

export default Contact;