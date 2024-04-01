import { El } from "../../library";

export function Main() {
  return El({
    element: "table",
    className: "w-screen border border-collapse ",
    children: [
      El({
        element: "thead",
        className: "border",
        children: [
          El({
            element: "tr",
            children: [
              El({
                element: "th",
                className: "sm:px-4 sm:py-3 border-2",
                innerHTML: "Task Name",
              }),
              El({
                element: "th",
                className: "sm:px-4 sm:py-3 border-2",
                innerHTML: "Priority",
              }),
              El({
                element: "th",
                className: "sm:px-4 sm:py-3 border-2",
                innerHTML: "Status",
              }),
              El({
                element: "th",
                className: "sm:px-4 sm:py-3 border-2",
                innerHTML: "Deadline",
              }),
              El({
                element: "th",
                className: "sm:px-4 sm:py-3 border-2",
                innerHTML: "Actions",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "tbody",
        className: "",
        children: [],
        id: "tableBody",
      }),
    ],
  });
}
