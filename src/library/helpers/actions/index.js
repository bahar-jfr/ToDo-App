import { handelCrud } from "../../functions/handelCrud";
import { El } from "../El";
const actionData = [
  {
    name: "delete",
    src: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8"/><path fill="none" d="M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4"/><path fill="#fff" d="M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33ZM176 416l-9-256h33l9 256Zm96 0h-32V160h32Zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4Zm40 320h-33l9-256h33Z"/></svg>`,
    class: "bg-light_pink w-fit md:px-2  py-1  rounded-md ",
  },
  {
    name: "edit",
    src: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#fff" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>`,
    class: "bg-light_blue w-fit md:px-2  py-1  rounded-md",
  },
  {
    name: "view",
    src: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><circle cx="256" cy="256" r="64" fill="#fff"/><path fill="#fff" d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11c-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72c38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76M256 352a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"/></svg>`,
    class: "bg-dark_gray w-fit  md:px-2  py-1  rounded-md",
  },
];

export function actionBtn(index) {
  return El({
    element: "div",
    id: `${actionData[index].name}`,
    className: `${actionData[index].class}`,
    eventListener: [
      {
        event: "click",
        callback: handelCrud,
      },
    ],
    children: [
      El({
        element: "p",
        innerHTML: `${actionData[index].src}`,
      }),
    ],
  });
}
