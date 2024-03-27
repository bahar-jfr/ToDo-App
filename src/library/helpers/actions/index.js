import { El } from "../El";
const actionData = [
  {
    name: "delete",
    src: "./src/assets/images/ion--trash-sharp.svg",
    class: "bg-light_pink w-fit md:px-2  py-1  rounded-md",
  },
  {
    name: "edit",
    src: "./src/assets/images/mdi--edit.svg",
    class: "bg-light_blue w-fit md:px-2  py-1  rounded-md",
  },
  {
    name: "view",
    src: "./src/assets/images/ion--eye.svg",
    class: "bg-dark_gray w-fit md:px-2  py-1  rounded-md",
  },
];

export function actionBtn(index) {
  return El({
    element: "div",
    className: `${actionData[index].class}`,
    children: [
      El({
        element: "img",
        src: `${actionData[index].src}`,
      }),
    ],
  });
}
