import { El } from "../../library";

export function Container(...children) {
  return El({
    element: "div",
    className: "mx-auto",
    children,
  });
}
