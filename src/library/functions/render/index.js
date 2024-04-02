import { El } from "../../helpers";
import { actionBtn } from "../../helpers/actions";
import { statusBtn } from "../../helpers/status";
import { hideLoading } from "../hideLoading";
import { showLoading } from "../showLoading";

export async function render(tasks) {
  const tableBody = document.getElementById("tableBody");
  showLoading();
  // Reset the table bode
  tableBody.innerHTML = "";

  tasks.forEach((item) => {
    const row = El({
      element: "tr",
      id: item.id,
      className: "text-center border-collapse border-2",
      children: [
        El({
          element: "td",
          className: " py-3 w-1/5 text-center",
          innerHTML: item.taskName,
        }),
        statusBtn(item.priority),
        statusBtn(item.status),

        El({
          element: "td",
          className: " border-x-2  py-3 m-0  w-1/5 text-center",
          children: [
            El({
              element: "p",
              className:
                "border-2 border-blue rounded-2xl w-32 mx-3 sm:mx-5 lg:mx-10 xl:mx-20 text-center",
              innerHTML: item.date,
            }),
          ],
        }),
        El({
          element: "td",
          id: "action",
          className:
            "relative flex justify-center items-center gap-2 h-24 md:h-14 ",
          children: [actionBtn(0), actionBtn(1), actionBtn(2)],
        }),
      ],
    });
    hideLoading();
    /*    setTimeout(() => { */
    tableBody.append(row);
    /*     }, 1100) */
  });
}
