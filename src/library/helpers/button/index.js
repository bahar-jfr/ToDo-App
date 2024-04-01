import { El } from "../El";

export function btnMaker(text, id, type) {
  return El({
    element: "button",
    className:
      "border-2 border-dark_purple text-dark_purple font-semibold w-fit mb-4 xl:mb-0  px-8 py-2 rounded-md hover:bg-dark_purple hover:text-white  hover:cursor-pointer hover:transition-all hover:duration-250 active:shadow-md active:shadow-light_purple active:transition-all",
    id,
    innerHTML: text,
    type,
  });
}
