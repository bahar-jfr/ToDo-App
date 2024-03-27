import { closeModal } from "../closeModal";
import { setData } from "../../../api/setData";

const isEdit = false;

export function handelSubmit() {
  closeModal();
  const form = document.querySelector("form");
  const taskName = form.taskName.value;
  const priority = form.priority.value;
  const status = form.status.value;
  const date = form.date.value;
  const desc = form.description.value;

  if (!isEdit) {
    const task = {
      taskName,
      priority,
      status,
      date,
      desc,
      id: Date.now(),
    };
    setData(task);
  }
}
