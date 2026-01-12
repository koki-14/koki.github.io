// 🔐 管理者チェック
const ok = sessionStorage.getItem("admin");

if (!ok) {
  const p = prompt("管理者パスワードを入力してください");
  if (p !== "admin123") {
    location.href = "index.html";
  } else {
    sessionStorage.setItem("admin", "1");
  }
}

// 📥 CSVダウンロード
function downloadCSV() {
  window.open("【CSVダウンロード用GAS URL】", "_blank");
}

// 🚪 ログアウト
function logout() {
  sessionStorage.removeItem("admin");
  location.href = "index.html";
}
