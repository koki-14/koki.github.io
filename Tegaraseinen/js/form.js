const GAS_URL = "https://script.google.com/macros/s/AKfycbxIYRkLcINKdPJ_HkNM22RUJvxnA6UzJDY0_jKVOhPStr6X_sGlHaIPDaFQ-5V80KDxKA/exec";

source.addEventListener("change", () => {
  introducer.style.display =
    (source.value === "知人" || source.value === "その他")
      ? "block" : "none";
  if (source.value === "手柄青年会") introducer.value = "";
});

form.addEventListener("submit", e => {
  e.preventDefault();
  msg.textContent = "";

  [kana, kanji, source, email].forEach(el =>
    el.classList.remove("error")
  );

  let err = false;
  if (!kana.value.trim()) { kana.classList.add("error"); err = true; }
  if (!kanji.value.trim()) { kanji.classList.add("error"); err = true; }
  if (!source.value) { source.classList.add("error"); err = true; }
  if (!email.value.trim()) { email.classList.add("error"); err = true; }

  if (err) {
    msg.textContent = "未入力の項目があります";
    return;
  }

  fetch(GAS_URL, {
    method: "POST",
    body: JSON.stringify({
      kana: kana.value.trim(),
      kanji: kanji.value.trim(),
      source: source.value,
      introducer: introducer.value.trim(),
      email: email.value.trim()
    })
  })
  .then(() => location.href = "thanks.html")
  .catch(() => msg.textContent = "送信に失敗しました");
});
