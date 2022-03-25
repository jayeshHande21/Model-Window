"use strict";
const overlay = document.querySelector(".overlay");

const modal = document.querySelector(".modal");

const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal");

function closeModal() {
  modal.classList.add("hidden");

  overlay.classList.add("hidden");
}
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
