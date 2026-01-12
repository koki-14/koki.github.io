// 🔐 管理者チェック
const ADMIN_PASS = "admin123";
const GAS_URL = "https://script.google.com/macros/s/AKfycbytPBfFnX-HatoEXIRyeBWqxB1Mcb2VUIqT6w7KC6EvL5wAoBCcuegHF1LTn6gZ33Jo1w/exec";

const ok = sessionStorage.getItem("admin");

if (!ok) {
  const p = prompt("管理者パスワードを入力してください");
  if (p !== ADMIN_PASS) {
    location.href = "index.html";
  } else {
    sessionStorage.setItem("admin", "1");
  }
}

// 📥 CSVダウンロード
function downloadCSV() {
  window.open(
    GAS_URL + "?mode=csv&pass=" + encodeURIComponent(ADMIN_PASS),
    "_blank"
  );
}

// 🚪 ログアウト
function logout() {
  sessionStorage.removeItem("admin");
  location.href = "index.html";
}
