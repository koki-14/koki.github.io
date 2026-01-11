/* メニュー */
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("open");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("open");
}

/* スライドショー（背景） */
document.addEventListener("DOMContentLoaded", () => {

  // 写真を追加したら1行コピペする
  const slides = [
    "img/slide1.jpg",
    "img/slide2.jpg"
  ];

  let index = 0;
  const slideImage = document.getElementById("slideImage");

  if (!slideImage) return; // 念のため

  // ４秒ごとにスライド
  setInterval(() => {
    index = (index + 1) % slides.length;
    slideImage.src = slides[index];
  }, 4000);

});
