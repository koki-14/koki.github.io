function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("open");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("open");
}

/* スライドショー */
const slides = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg"
];
let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  document.getElementById("slideImage").src = slides[index];
}, 4000);