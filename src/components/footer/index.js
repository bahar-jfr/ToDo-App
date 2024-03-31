import { El } from "../../library";
import { handelPage } from "../../library/functions/handelPage";
import { page } from "../../library/functions/handelSubmit";
import { pagination } from "../../library/functions/pagination";

export function Footer() {
  const footer = El({
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
            id: "selectPage",
            className: "outline-0",
            children: [
              El({
                element: "option",
                children: "All",
                selected : true
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
            className: "flex items-center mt-2 xs:mt-0",
            children: [
              El({
                element: "button",
                id: "prev",
                className:
                  "inline-flex items-center px-4 py-2 text-sm font-medium ",
                innerHTML: "<<",
              }),
              El({
                element: "span",
                id: "pageNum",
                innerHTML: page.currentPage,
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
  footer.querySelector("#selectPage").addEventListener("change", handelPage);
  footer.querySelector("#pagination").addEventListener("click", pagination);
  return footer;
}
