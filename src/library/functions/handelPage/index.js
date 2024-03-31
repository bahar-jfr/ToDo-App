import { getData } from "../../../api/getData";
import { page } from "../handelSubmit";
import { render } from "../render";

export function handelPage(e) {
  if (e.target.value === "All") {
    getData(1, 999).then((res) => {
      render(res.data.data);
    });
  } else {
    page.perPge = e.target.value;
    getData(page.currentPage, page.perPge).then((res) => {
      render(res.data.data);
    });
  }
}
