import { El } from "../El";

const statusData = {
  Low: "bg-light_gray",
  High: "bg-light_pink text-white",
  Medium: "bg-dark_yellow",
  Todo: "bg-light_pink text-white",
  Doing: "bg-dark_yellow",
  Done: "bg-dark_green",
};

export function statusBtn(item) {
  return El({
    element: "td",
    className: " border-x-2  py-3 w-1/5 text-center ",
    children: [
        El({
            element: "div",
            className: "w-full flex justify-center",
            children:[
                El({
                    element: "p",
                    className: `font-semibold md:py-1 md:px-2 px-1 w-fit rounded-3xl ${statusData[item]} `,
                    innerText: item,
                  }),
            ]
        })

    ],
  });
}

export function emptyStatusBtn(item) {
  return El({
              element: "p",
               className: ` md:py-2 md:px-2 px-1 w-fit rounded-3xl ${statusData[item]} `,
             })
}