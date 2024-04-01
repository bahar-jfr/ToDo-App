export function showModal(title,btn) {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const modalTitle =document.getElementById("modalTitle");
  const submit = document.getElementById("submit")

  modal.style.display = "block";
  overlay.style.display = "block";
  modalTitle.innerHTML = `${title}`
  submit.innerHTML = `${btn}`
}
