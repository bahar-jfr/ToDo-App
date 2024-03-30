import { deleteData } from "../../../api/deleteData";
import { getData } from "../../../api/getData";
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
   
  }
}
