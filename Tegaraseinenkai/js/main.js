
/* メニュー */
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("open");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("open");
}

/* スライドショー */
const slides = [
  "img/slide1.jpg",
  "img/slide2.jpg",
  "img/slide3.jpg",
  "img/slide4.jpg"
];
let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  document.getElementById("slideImage").src = slides[index];
}, 4000);