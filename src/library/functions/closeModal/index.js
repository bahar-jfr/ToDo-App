export function closeModal() {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  modal.style.display = "none";
  overlay.style.display = "none";
}
