import { handelSubmit } from "../handelSubmit";

export function validate(e) {
  e.preventDefault();
  const invalidTask = document.getElementById("invalidTask");
  const invalidDate = document.getElementById("invalidDate");
  const form = document.querySelector("form");
  const taskName = form.taskName.value;
  const date = form.date.value;

  if (taskName.length === 0) {
    invalidTask.style.display = "block";
  }else if (date.length === 0) {
    invalidDate.style.display = "block";
  } else {
    handelSubmit();
  }
}
