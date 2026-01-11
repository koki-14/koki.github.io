const GAS_URL = "https://script.google.com/macros/s/AKfycbxIYRkLcINKdPJ_HkNM22RUJvxnA6UzJDY0_jKVOhPStr6X_sGlHaIPDaFQ-5V80KDxKA/exec";   /*-- グーグルスプレッドシート（保存先） --*/

source.addEventListener("change", () => {
  introducer.style.display =
    source.value === "知人" || source.value === "その他"
    ? "block" : "none";
});

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    kana: kana.value.trim(),
    kanji: kanji.value.trim(),
    source: source.value,
    introducer: introducer.value.trim(),
    email: email.value.trim()
  };

  if (!data.kana || !data.kanji || !data.source || !data.email) {
    msg.textContent = "すべて入力してください";
    return;
  }

  fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify(data)
  }).then(() => location.href = "thanks.html");
});
