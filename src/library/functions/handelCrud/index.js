import { deleteData } from "../../../api/deleteData";
import { getData } from "../../../api/getData";
import { emptyStatusBtn } from "../../helpers/status";
import { render } from "../render";
import { showModal } from "../showModal";

export async function handelCrud(e) {
  const taskId = e.currentTarget.closest("tr").id;
  // delete items from data
  if (e.currentTarget.id === "delete") {
    await deleteData(taskId);
    await getData(1, 5).then((res) => {
      render(res.data);
    });
  }

  // edit items
  if (e.currentTarget.id === "edit") {
  }

  // view items description
  if (e.currentTarget.id === "view") {
    const tasks = (await getData(1, 5)).data;
    const veiwTask = tasks.find((task) => task.id == taskId);
    const descView = document.getElementById("descView");
    const taskView = document.getElementById("taskView");
    const statusColor = document.getElementById("statusColor");
    const priorityColor = document.getElementById("priorityColor");
    const viewModal = document.getElementById("viewModal");
    const overlay = document.getElementById("overlay");

    viewModal.style.display = "block";
    overlay.style.display = "block";
    descView.innerHTML = veiwTask.desc;
    taskView.innerHTML = veiwTask.taskName;
    priorityColor.append(emptyStatusBtn(veiwTask.priority));
    statusColor.append(emptyStatusBtn(veiwTask.status));
  }
}
