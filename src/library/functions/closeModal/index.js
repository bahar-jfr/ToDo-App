export function closeModal() {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const viewModal = document.getElementById("viewModal");
  const invalidDate = document.getElementById("invalidDate");
  const invalidTask = document.getElementById("invalidTask");
  const statusColor = document.getElementById("statusColor");
  const priorityColor = document.getElementById("priorityColor");
  const daysLeft = document.getElementById("daysLeft");
  const form = document.querySelector("form");

  modal.style.display = "none";
  overlay.style.display = "none";
  viewModal.style.display = "none";

  if (invalidDate || invalidTask || statusColor || priorityColor || daysLeft) {
    invalidDate.style.display = "none";
    invalidTask.style.display = "none";
    statusColor.innerHTML = "";
    priorityColor.innerHTML = "";
    daysLeft.innerHTML = "";
  }

  // Reset inputs
    form.taskName.value = "";
    form.description.value = "";
    form.date.value = "";
 
}
