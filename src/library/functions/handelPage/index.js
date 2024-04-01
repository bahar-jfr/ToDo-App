import { getData } from "../../../api/getData";
import { page } from "../handelSubmit";
import { render } from "../render";

export let selectPage;

export function handelPage(e) {
  selectPage = e.target.value;
  if (selectPage === "All") {
    getData(1, 999).then((res) => {
      render(res.data.data);
    });
  } else {
    page.perPge = Number(selectPage);
    getData(page.currentPage ,page.perPge).then((res) => {
      render(res.data.data);
    });
  }
}
