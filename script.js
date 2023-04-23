var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");

var closeModalBtn = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);
