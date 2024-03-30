import { deleteData } from "../../../api/deleteData";
import { getData } from "../../../api/getData";
import { emptyStatusBtn } from "../../helpers/status";
import { isEdit, page } from "../handelSubmit";
import { render } from "../render";
import { showModal } from "../showModal";

export let itemId;

export async function handelCrud(e) {
  console.log(e.currentTarget.id);
  const taskId = e.currentTarget.closest("tr").id;
  const form = document.querySelector("form");
  const overlay = document.getElementById("overlay");

  // delete items from data
  if (e.currentTarget.id === "delete") {
    await deleteData(taskId);
    await getData(page.currentPage, page.perPge).then((res) => {
      render(res.data.data);
    });
  }

  // edit items
  else if (e.currentTarget.id === "edit") {
    const tasks = (await getData(page.currentPage, page.perPge)).data.data;
    const findTask = tasks.find((task) => task.id == taskId);
    form.taskName.value = findTask.taskName;
    form.priority.value = findTask.priority;
    form.status.value = findTask.status;
    form.date.value = findTask.date;
    form.description.value = findTask.desc;

    showModal("Edit Task", "Update");

    isEdit.mode = true;
    itemId = taskId;
  }

  // view items description
  else if (e.currentTarget.id === "view") {
    const tasks = (await getData(page.currentPage, page.perPge)).data.data;
    const findTask = tasks.find((task) => task.id == taskId);
    const descView = document.getElementById("descView");
    const taskView = document.getElementById("taskView");
    const statusColor = document.getElementById("statusColor");
    const priorityColor = document.getElementById("priorityColor");
    const viewModal = document.getElementById("viewModal");

    viewModal.style.display = "block";
    overlay.style.display = "block";
    descView.innerHTML = findTask.desc;
    taskView.innerHTML = findTask.taskName;
    priorityColor.append(emptyStatusBtn(findTask.priority));
    statusColor.append(emptyStatusBtn(findTask.status));
  }
}
