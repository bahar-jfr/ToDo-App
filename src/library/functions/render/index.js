import { El } from "../../helpers";
import { actionBtn } from "../../helpers/actions";
import { statusBtn } from "../../helpers/status";

export function render(tasks) {
  const tableBody = document.getElementById("tableBody");

  // Reset the table bode
  tableBody.innerHTML = "";

  tasks.forEach((item) => {
    const row = El({
      element: "tr",
      id: item.id,
      className: "border-collapse border-2",
      children: [
        El({
          element: "td",
          className: " py-3 w-1/5 text-center",
          children: item.taskName,
        }),
        statusBtn(item.priority),
        statusBtn(item.status),

        El({
          element: "td",
          className: " border-x-2  py-3 w-1/5 text-center",
          children: [
            El({
              element: "p",
              className: "border-2 border-blue rounded-2xl w-32 md:ml-20",
              children: item.date,
            }),
          ],
        }),
        El({
          element: "td",
          id : "action",
          className: "flex justify-center gap-2 py-3",
          children: [actionBtn(0), actionBtn(1), actionBtn(2)],
        }),
      ],
    });
    tableBody.append(row);
  });
}
