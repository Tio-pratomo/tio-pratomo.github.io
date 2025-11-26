import { lectures } from "./data.js";

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-sm");
  } else {
    navbar.classList.remove("shadow-sm");
  }
});

// Dynamic current year
document
  .getElementById("current-year")
  .insertAdjacentText("beforeend", new Date().getFullYear());

// Insert lecture cards element
const cards = lectures.map(
  ({ title, desc, link }) => /* html */ `
<div class="col-lg-4 col-md-6">
  <div class="card portfolio-card h-100">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        ${desc}
      </p>
      <a
        href="${link}"
        class="btn btn-primary mt-auto"
        target="_blank"
        >Visit Project</a
      >
    </div>
  </div>
</div>
`
);

cards.forEach((card) => {
  document.getElementById("mycards").insertAdjacentHTML("beforeend", card);
});
