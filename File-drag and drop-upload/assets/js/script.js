const fileZone = document.querySelector(".file-zone");
const gallery = document.querySelector(".gallery .row");
const btnDownload = document.querySelector(".downbtn");

fileZone.addEventListener("dragover", (e) => e.preventDefault());

fileZone.addEventListener("drop", (e) => {
  e.preventDefault();

  const { dataTransfer } = e;

  let fileReader = new FileReader();

  fileReader.readAsDataURL(dataTransfer.files[0]);

  fileReader.onload = function () {
    console.log(fileReader.result);
    gallery.innerHTML += `
    <div class="col-md-3">
        <img src="${fileReader.result}" class="img-fluid" alt="" />
        <button class="downbtn" >Download<i class="fa-solid fa-file-arrow-down d"></i></button>
    </div>
    `;
  };

  
});
btnDownload.addEventListener("click", () => {
  let imagePath = img.getAttribute("src");
  let fileName = getFileName(imagePath);
  saveAs(imagePath, fileName);
});
function getFileName(str) {
  return str.substring(str.lastIndexOf('/') + 1)
};


