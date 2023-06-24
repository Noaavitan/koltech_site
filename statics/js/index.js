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
  // const element = document.getElementById(`#section--${item.id}`);
  item.addEventListener("click", (e) => {
    e.preventDefault;
    document.querySelector(item.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    console.log(item);
    // console.log(element);
  });
});
