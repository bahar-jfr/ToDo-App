import { El } from "../../library";

export function Main() {
  return El({
    element: "table",
    className: "w-full border border-collapse",
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
                className: "px-4 py-3 border-2",
                children: "Task Name",
              }),
              El({
                element: "th",
                className: "px-4 py-3 border-2",
                children: "Priority",
              }),
              El({
                element: "th",
                className: "px-4 py-3 border-2",
                children: "Status",
              }),
              El({
                element: "th",
                className: "px-4 py-3 border-2",
                children: "Deadline",
              }),
              El({
                element: "th",
                className: "px-4 py-3 border-2",
                children: "Actions",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "tbody",
        className: '',
        children:[],
        id: "tableBody"
      })
    ],
  });
}
