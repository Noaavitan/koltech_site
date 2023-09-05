"use strict";

// slider
const slides = document.querySelectorAll(".slide");
const controls = document.querySelectorAll(".control");
let activeSlide = 0;
let prevActive = 0;

let num = setInterval(changeSlides, 4000);
changeSlides();

function changeSlides() {
  slides[prevActive].classList.remove("active");
  controls[prevActive].classList.remove("active");

  slides[activeSlide].classList.add("active");
  controls[activeSlide].classList.add("active");

  prevActive = activeSlide++;

  if (activeSlide >= 3) {
    activeSlide = 0;
  }

  // console.log(prevActive, activeSlide);
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    let idx = [...controls].findIndex((c) => c === control);
    activeSlide = idx;

    changeSlides();

    clearInterval(num);
    num = setInterval(changeSlides, 4000);
  });
});

// nav smooth scrol
const navItems = document.querySelectorAll(".nav__item");
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault;
    document.querySelector(item.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    console.log(item);
  });
});

// revealling elements on scroll
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// modal window
const contentBtn = document.querySelector(".btn--show-modal");
const modalWindow = document.querySelector(".modal");
const closeBtn = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");

contentBtn.addEventListener("click", () => {
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
});

// // gallery

const images = document.querySelectorAll(".gallery__image");

let contenedorModal;

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    printModal(images[i].src, images[i].alt);
  });
}

const printModal = (source, alt) => {
  contenedorModal = document.createElement("div");
  contenedorModal.setAttribute("class", "js-contenedor-modal");
  contenedorModal.innerHTML = `
    <img src='${source}' alt='${alt}' class='modal__image' />
    <div class="js-icono-cerrar" id="closeModal"></div>
  `;
  document.body.appendChild(contenedorModal);

  const closeModalButton = document.getElementById("closeModal");
  closeModalButton.addEventListener("click", removeModal);

  document.addEventListener("click", (e) => {
    if (e.target.className === "js-contenedor-modal") {
      removeModal();
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      removeModal();
    }
  });
};

const removeModal = () => {
  if (contenedorModal) {
    contenedorModal.remove();
    contenedorModal = null;
  }
};
