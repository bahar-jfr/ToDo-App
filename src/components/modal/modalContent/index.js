import { El, btnMaker } from "../../../library";
import { validate } from "../../../library/functions/validate";

export function ModalContent() {
  const form = El({
    element: "form",
    className: "flex flex-col gap-6 items-center px-4",
    children: [
      El({
        element: "div",
        className: "w-full",
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
            id: "invalidTask",
            className: "hidden  m-0 pl-2 text-red-400",
            innerHTML: "This field is required!",
          }),
        ],
      }),

      El({
        element: "div",
        className: "flex xl:justify-around gap-4 xl:gap-8 items-center w-full flex-col md:flex-row",
        children: [
          El({
            element: "div",
            className: "relative w-full ",
            children: [
              El({
                element: "span",
                className:
                  "absolute -top-2.5 left-3 z-10 text-xs text-dark_purple",
                innerHTML: " Priority ",
              }),
              El({
                element: "select",
                id: "priority",
                className:
                  "p-2 w-full rounded-md outline-none cursor-pointer text-dark_purple relative",
                children: [
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
                className:
                  "absolute -top-2.5 left-3 z-10 text-xs text-dark_purple",
                innerHTML: " Status ",
              }),
              El({
                element: "select",
                id: "status",
                className:
                  "p-2 w-full rounded-md outline-none cursor-pointer text-dark_purple relative",
                children: [
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
                className:
                  "absolute -top-2.5 left-3 z-10 text-xs text-dark_purple",
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
                      "p-2 w-full rounded-md outline-none cursor-pointer text-dark_purple relative",
                    type: "date",
                  }),
                  El({
                    element: "div",
                    id: "invalidDate",
                    className: "hidden  pl-2 text-red-400 text-sm",
                    innerHTML: "required!",
                  }),
                ],
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
            element: "label",
            className: "absolute -top-2.5 left-3 z-10 text-xs text-dark_purple",
            innerHTML: "Description",
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

  form.addEventListener("submit", validate);

  return form;
}
