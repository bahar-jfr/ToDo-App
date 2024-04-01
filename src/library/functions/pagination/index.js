import { getData } from "../../../api/getData";
import { selectPage } from "../handelPage";
import { page } from "../handelSubmit";
import { render } from "../render";

export async function pagination(e) {
  const pageNum = document.getElementById("pageNum");
  const totalPage = await getData(page.currentPage,page.perPge);

  if (e.target.id === "next") {
    if (page.currentPage >= totalPage.totalPage || selectPage === "All") return;

    ++page.currentPage;
    pageNum.innerHTML = page.currentPage;

    getData(page.currentPage, page.perPge).then((res) => {
      render(res.data.data);
    });
  }
  if (e.target.id === "prev") {
    // prev is null, if should stop here and return
    if (page.currentPage === 1) return;

    --page.currentPage;
    pageNum.innerHTML = page.currentPage;

    getData(page.currentPage, page.perPge).then((res) => {
      render(res.data.data);
    });
  }
}
