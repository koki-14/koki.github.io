// メニュー
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("slideMenu");
const overlay = document.getElementById("overlay");

if (btn) btn.onclick = () => {
  menu.classList.add("open");
  overlay.classList.add("show");
};

if (overlay) overlay.onclick = close;
if (menu) menu.querySelectorAll("a").forEach(a => a.onclick = close);

function close() {
  menu.classList.remove("open");
  overlay.classList.remove("show");
}

// スライドショー
fetch("data/slides.json")
  .then(r => r.json())
  .then(d => {
    const img = document.getElementById("slideImage");
    if (!img) return;
    let i = 0;
    setInterval(() => {
      i = (i + 1) % d.slides.length;
      img.src = "img/" + d.slides[i];
    }, 4000);
  });

// 更新日表示
fetch("data/news.json")
  .then(r => r.json())
  .then(d => {
    if (!d.current.length) return;
    const date = new Date(d.current[0].date);
    const t = document.getElementById("lastUpdate");
    if (t) t.textContent =
      `最終更新日：${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`;
  });
