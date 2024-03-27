import { El, btnMaker } from "../../../library";
import { closeModal } from "../../../library/functions/closeModal";
import { handelSubmit } from "../../../library/functions/handelSubmit";

export function ModalContent() {
  const form = El({
    element: "form",
    className: "flex flex-col gap-8 items-center px-4",
    children: [
      El({
        element: "input",
        id: "taskName",
        className:
          "p-4 w-full rounded-md outline-none placeholder:text-purple-300",
        placeholder: "task name",
      }),
      El({
        element: "div",
        className: "flex justify-around gap-4 md:gap-8 items-center w-full ",
        children: [
          El({
            element: "div",
            className: "relative w-full ",
            children: [
              El({
                element: "span",
                className:
                  "absolute -top-2.5 left-3 z-10 text-xs text-dark_purple",
                children: " Priority ",
              }),
              El({
                element: "select",
                id: "priority",
                className:
                  "p-2 w-full rounded-md outline-none cursor-pointer text-dark_purple relative",
                children: [
                  El({
                    element: "option",
                    children: "Low",
                    value: "Low",
                  }),
                  El({
                    element: "option",
                    children: "Medium",
                    value: "Medium",
                  }),
                  El({
                    element: "option",
                    children: "High",
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
                className:
                  "absolute -top-2.5 left-3 z-10 text-xs text-dark_purple",
                children: " Status ",
              }),
              El({
                element: "select",
                id: "status",
                className:
                  "p-2 w-full rounded-md outline-none cursor-pointer text-dark_purple relative",
                children: [
                  El({
                    element: "option",
                    children: "Todo",
                    value: "Todo",
                  }),
                  El({
                    element: "option",
                    children: "Doing",
                    value: "Doing",
                  }),
                  El({
                    element: "option",
                    children: "Done",
                    value: "Done",
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
                className:
                  "absolute -top-2.5 left-3 z-10 text-xs text-dark_purple",
                children: " Date ",
              }),
              El({
                element: "input",
                id: "date",
                className:
                  "p-2 w-full rounded-md outline-none cursor-pointer text-dark_purple relative",
                type: "date",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "relative",
        children: [
          El({
            element: "label",
            className: "absolute -top-2.5 left-3 z-10 text-xs text-dark_purple",
            children: "Description",
          }),
          El({
            element: "textarea",
            id: "description",
            rows: 2,
            cols: 30,
            className:
              "p-2 w-full rounded-md outline-none cursor-pointer text-dark_purple",
          }),
        ],
      }),
      btnMaker("Submit", "submit", "submit"),
    ],
  });
  form.querySelector("#submit").addEventListener("click", closeModal);
  form.addEventListener("submit",handelSubmit)
  return form;
}
