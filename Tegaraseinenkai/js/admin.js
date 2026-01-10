const PASSWORD = "tegaraseinen";  //パスワード：tegaraseinen

function login() {
  if (pw.value === PASSWORD) {
    login.style.display = "none";
    admin.style.display = "block";
  } else {
    alert("パスワードが違います");
  }
}

function addNews() {
  fetch("data/news.json")
    .then(r => r.json())
    .then(d => {
      const n = {
        date: date.value,
        title: title.value,
        body: body.value
      };
      if (!n.date || !n.title) return alert("必須項目不足");
      d.current.unshift(n);

      download(
        new Blob([JSON.stringify(d,null,2)], {type:"application/json"}),
        "news.json"
      );
    });
}

function exportPhotos() {
  zipFiles("photos", "photos.zip");
}
function exportPDFs() {
  zipFiles("pdfs", "pdf.zip");
}

function zipFiles(id, name) {
  const files = document.getElementById(id).files;
  if (!files.length) return;
  const zip = new JSZip();
  [...files].forEach(f => zip.file(f.name, f));
  zip.generateAsync({type:"blob"}).then(b => download(b, name));
}


//共通ダウンロード関数
function download(blob, name) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
}
