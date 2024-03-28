import { getData } from "../../../api/getData";
import { page } from "../handelSubmit";
import { render } from "../render";

export function pagination(e) {
  if (e.target.id === "next") {
    ++page.currentPage;
    getData(page.currentPage, page.perPge).then((res) => {
      render(res["data"]["data"]);

    });
  }
  if (e.target.id === "prev") {
    // prev is null, if should stop here and return 
    if (page.currentPage === 1) return;
    
    --page.currentPage;
    getData(page.currentPage, page.perPge).then((res) => {
      render(res["data"]["data"]);

    });
  }
}