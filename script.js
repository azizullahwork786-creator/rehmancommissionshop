const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("formMessage");
  message.textContent = `Thank you, ${name}! Your demo enquiry has been recorded on this page.`;
  event.target.reset();
});
