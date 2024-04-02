import { getData } from "../../../api/getData";
import { page } from "../handelSubmit";
import { hideLoading } from "../hideLoading";
import { render } from "../render";
import { showLoading } from "../showLoading";

export let selectPage;

export function handelPage(e) {
  selectPage = e.target.value;
  if (selectPage === "All") {
    showLoading()
    getData(1, 999).then((res) => {
      render(res.data.data);
    });
    hideLoading()
  } else {
    showLoading()
    page.perPge = Number(selectPage);
    getData(page.currentPage ,page.perPge).then((res) => {
      render(res.data.data);
    });
    hideLoading()
  }
}
