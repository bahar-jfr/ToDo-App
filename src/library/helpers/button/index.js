import { El } from "../El";


export function btnMaker(text , id){
    return El({
        element : "button",
        className: "border-2 border-dark_purple text-dark_purple font-semibold w-fit  px-8 py-2 rounded-md hover:border-4 hover:px-7.6 hover:py-1.5 hover:cursor-pointer hover:transition-all active:shadow-md active:shadow-light_purple active:transition-all",
        id,
        children : text
    })
}