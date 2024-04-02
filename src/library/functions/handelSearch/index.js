import { getData } from "../../../api/getData";
import { debounce } from "../../helpers/debounce";
import { page } from "../handelSubmit";
import { hideLoading } from "../hideLoading";
import { render } from "../render";
import { showLoading } from "../showLoading";

export function handelSearch(e) {
  const searchItem = e.target.value;

  debounce(
    () =>
      getData(page.currentPage, page.perPge, searchItem).then((res) => {
        render(res.data.data);
      }),
    2000
  );
}
