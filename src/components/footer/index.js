import { El } from "../../library";

export function Footer() {
  return El({
    element: "div",
    className: "w-full p-4 flex justify-end items-center",
    children: [
      El({
        element: "div",
        className: "mt-2 space-x-4  rounded-l flex items-center",
        children: [
          El({
            element: "label",
            className: "ml-3",
            children: "Rows per page : ",
          }),
          El({
            element: "select",
            className: "outline-0",
            children: [
              El({
                element: "option",
                hidden: true,
                selected: true,
                children: "select",
              }),
              El({
                element: "option",
                children: "All",
              }),
              El({
                element: "option",
                children: "5",
              }),
              El({
                element: "option",
                children: "10",
              }),
              El({
                element: "option",
                children: "15",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        id: "pagination",
        className: "flex gap-3 items-center mx-4",
        children: [
          El({
            element: "div",
            className: "inline-flex mt-2 xs:mt-0",
            children: [
              El({
                element: "button",
                id: "prev",
                className:
                  "inline-flex items-center px-4 py-2 text-sm font-medium ",
                innerHTML: "<<",
              }),
              El({
                element: "button",
                id: "next",
                className:
                  "inline-flex items-center px-4 py-2 text-sm font-medium ",
                innerHTML: ">>",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
