import { El } from "../../../library";
import { closeFilter } from "../../../library/functions/closeFilter";
import { closeModal } from "../../../library/functions/closeModal";
import { ModalContent } from "../modalContent";

export function Modal() {
  return El({
    element: "div",
    id: "modal",
    className:
      " transition duration-500  w-80 md:w-2/6 h-80 md:h-3/5 rounded-md shadow-2xl z-10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  hidden bg-purple-100",
    children: [
      El({
        element: "h2",
        className:
          "bg-dark_purple text-white font-semibold text-xl p-4 mb-8 rounded-t-md",
        children: "Add New Task",
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
  Overlay.addEventListener("click", () =>{ closeModal(), closeFilter()});
  return Overlay;
}
