const form = document.getElementById("form");
const source = document.getElementById("source");
const introducer = document.getElementById("introducer");
const msg = document.getElementById("msg");
const clearBtn = document.getElementById("clearBtn");

// 🔽 紹介元を選択したら紹介者名を表示
source.addEventListener("change", () => {
  if (source.value !== "") {
    introducer.style.display = "block";
  } else {
    introducer.style.display = "none";
    introducer.value = "";
  }
});

// 🧹 入力内容クリア
clearBtn.addEventListener("click", () => {
  form.reset();
  introducer.style.display = "none";
  introducer.value = "";
  msg.textContent = "";
});

// 🔽 フォーム送信
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const kana = document.getElementById("kana").value.trim();
  const kanji = document.getElementById("kanji").value.trim();
  const email = document.getElementById("email").value.trim();
  const src = source.value;
  const intro = introducer.value.trim();

  // ✅ 入力チェック
  if (!kana || !kanji || !email || !src) {
    msg.textContent = "未入力の項目があります。すべて入力してください。";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "送信中です…";
  msg.style.color = "black";

  const data = {
    kana: kana,
    kanji: kanji,
    source: src,
    introducer: intro,
    email: email
  };

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbyaEIXmtl8rIppnSDx6n0Y8ZaGc7rWmY1Tt4WGFU572Lnf2rFF6yc6_qlfc-yDyAr-cXQ/exec?mode=csv&pass=admin123", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.status === "ok") {
      location.href = "thanks.html";
    } else {
      throw new Error();
    }

  } catch (err) {
    msg.textContent = "送信に失敗しました。時間をおいて再度お試しください。";
    msg.style.color = "red";
  }
});
