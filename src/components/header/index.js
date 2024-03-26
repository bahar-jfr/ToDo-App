import { El, icon } from "../../library";
import { showModal } from "../../library/functions/showModal";

export function Header() {
  const header = El({
    element: "header",
    className: "bg-dark_purple w-full flex gap-3 items-center p-6 text-white",
    children: [
      icon("fa-solid fa-list-ul"),
      El({
        element: "p",
        className: "flex-1 text-xs sm:text-sm md:text-xl",
        children: "My To-Do Task",
      }),
      El({
        element: "div",
        className: "bg-light_purple px-4 py-2 rounded-sm",
        children: [
          icon("fa-solid fa-magnifying-glass pr-4"),
          El({
            element: "input",
            className: "bg-transparent outline-none w-24 md:w-56",
            type: "text",
            placeholder: "Search",
          }),
        ],
      }),
      icon("fa-solid fa-filter fa-xl mx-3 cursor-pointer"),
      icon("fa-solid fa-square-plus fa-xl cursor-pointer"),
    ],
  });
  header.children[4].addEventListener("click", () => showModal());

  return header;
}