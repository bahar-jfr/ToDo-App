import { closeModal } from "../closeModal";
import { setData } from "../../../api/setData";
import { getData } from "../../../api/getData";
import { render } from "../render";
import { editData } from "../../../api/editData";
import { itemId } from "../handelCrud";

export const isEdit = {
  mode: false,
};

export const page = { currentPage: 1, perPge: 999 };

export async function handelSubmit() {
  const form = document.querySelector("form");
  const taskName = form.taskName.value;
  const priority = form.priority.value;
  const status = form.status.value;
  const date = form.date.value;
  const desc = form.description.value;

  if (!isEdit.mode) {
    const task = {
      taskName,
      priority,
      status,
      date,
      desc,
      id: Date.now(),
    };
    setData(task);
  } else {
    const updatedTask = {
      taskName,
      priority,
      status,
      date,
      desc,
    };
    await editData(itemId, updatedTask);
    isEdit.mode = false;
  }

  await getData(page.currentPage, page.perPge).then((res) => {
    render(res.data.data);
  });

  closeModal();
}
