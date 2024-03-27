export function closeModal() {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const invalidDate = document.getElementById("invalidDate");
  const invalidTask = document.getElementById("invalidTask");
  const form = document.querySelector("form");

  modal.style.display = "none";
  overlay.style.display = "none";
  invalidDate.style.display = "none";
  invalidTask.style.display = "none";

  // Reset inputs
  form.taskName.value = "";
  form.description.value = "";
  form.date.value = "";
}
