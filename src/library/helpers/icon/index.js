import { El } from "../El";

export const icon = (styles) => {
  return El({
    element: "i",
    className: styles,
  });
};
