import { El } from "../../../library";
import { closeFilter } from "../../../library/functions/closeFilter";
import { closeModal } from "../../../library/functions/closeModal";
import { ModalContent } from "../modalContent";

export function Modal() {
  return El({
    element: "div",
    id: "modal",
    className:
      " transition duration-500  w-80 xl:w-2/6 h-6/7 xl:h-3/5 rounded-md shadow-2xl z-10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  hidden bg-purple-100",
    children: [
      El({
        element: "h2",
        id: "modalTitle",
        className:
          "bg-dark_purple text-white font-semibold text-xl p-4 md:mb-8 mb-4 rounded-t-md",
        innerHTML: "",
      }),
      ModalContent(),
    ],
  });
}

export function Overlay() {
  const Overlay = El({
    element: "div",
    id: "overlay",
    className:
      "overlay fixed top-0 bg-black_overlay w-full h-full backdrop-blur-sm blur-sm bg-opacity-20 z-0 hidden ",
  });
  Overlay.addEventListener("click", () => {
    closeModal(), closeFilter();
  });
  return Overlay;
}

export function viewModal() {
  return El({
    element: "div",
    id: "viewModal",
    className:
      " transition duration-500  w-80 lg:w-2/6 h-2/3 sm:h-3/5 rounded-md shadow-2xl z-10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  hidden bg-purple-100 border-2 border-dark_purple",
    children: [
      El({
        element: "h2",
        className:
          "bg-purple-100 text-dark_purple border-b-2 border-dark_purple font-semibold text-xl p-4 mb-8 rounded-t-md",
        innerHTML: "View Description",
      }),
      El({
        element: "div",
        className: " mx-4 lg:mx-12  flex flex-col gap-4",
        children: [
          El({
            element: "p",
            className :"font-semibold md:text-lg text-dark_purple",
            id: "taskView",
            innerHTML: "",
          }),
         
          El({
            element: "p",
            id: "descView",
            className:
              " p-4 h-36 border-2 border-dark_purple rounded-md text-lg",
            innerHTML: "",
          }),
          El({
            element: "div",
            className: "flex gap-2 justify-end items-center",
            children: [
              El({
                element: "div",
                id: "priorityColor",
              }),
              El({
                element: "div",
                id: "statusColor",
              }),
              El({
                element: "div",
                id: "daysLeft",
              }),
            ]
           }),  
        ],
      }),
    ],
  });
}
