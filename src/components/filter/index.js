import { El, icon } from "../../library";
import { closeFilter } from "../../library/functions/closeFilter";
import { handelFilter } from "../../library/functions/handelFilter";

export function Filter() {
  const filter = El({
    element: "div",
    className:
      " invisible hidden absolute p-6 flex flex-col gap-12 bg-purple-100 h-screen top-0  sm:-right-96 sm:w-96 transition-all duration-1000",
    id: "filter",
    children: [
      El({
        element: "div",
        id: "headerFilter",
        className: "flex justify-between items-center mb-8",
        children: [
          El({
            element: "h2",
            className: "text-dark_purple font-semibold text-3xl ",
            innerHTML: "Filter",
          }),
          El({
            element: "span",
            className: "cursor-pointer",
            children: [icon("fa-solid fa-xmark fa-xl text-dark_purple")],
            eventListener: [
              {
                event: "click",
                callback: () => closeFilter(),
              },
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "relative w-full ",
        children: [
          El({
            element: "span",
            className: "absolute -top-4 left-3 z-10 text-lg text-dark_purple",
            innerHTML: " Priority ",
          }),
          El({
            element: "select",
            id: "priority",
            className:
              "p-4 w-full rounded-md outline-none cursor-pointer text-dark_purple relative",
            children: [
              El({
                element :"option",
                innerHTML : "Select",
                value: "Select",
                selected : true
              }),
              El({
                element: "option",
                innerHTML: "Low",
                value: "Low",
              }),
              El({
                element: "option",
                innerHTML: "Medium",
                value: "Medium",
              }),
              El({
                element: "option",
                innerHTML: "High",
                value: "High",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "relative w-full",
        children: [
          El({
            element: "span",
            className: "absolute -top-4 left-3 z-10 text-lg text-dark_purple",
            innerHTML: " Status ",
          }),
          El({
            element: "select",
            id: "status",
            className:
              "p-4 w-full rounded-md outline-none cursor-pointer text-dark_purple relative",
            children: [
              El({
                element:"option",
                innerHTML : "Select",
                value: "Select",
                selected : true,
              }),
              El({
                element: "option",
                innerHTML: "Todo",
                value: "Todo",
              }),
              El({
                element: "option",
                innerHTML: "Doing",
                value: "Doing",
              }),
              El({
                element: "option",
                innerHTML: "Done",
                value: "Done",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "relative w-full flex flex-col ",
        children: [
          El({
            element: "span",
            className: "absolute -top-4 left-3 z-10 text-lg text-dark_purple",
            innerHTML: " Date ",
          }),
          El({
            element: "div",
            className: " h-10",
            children: [
              El({
                element: "input",
                id: "date",
                className:
                  "p-4 w-full rounded-md outline-none cursor-pointer text-dark_purple relative",
                type: "date",
              }),
            ],
          }),
        ],
      }),
    ],
  });
  filter.addEventListener("change", handelFilter);
  return filter;
}
