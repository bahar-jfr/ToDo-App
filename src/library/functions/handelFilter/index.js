import { filterData } from "../../../api/filterData";
import { closeFilter } from "../closeFilter";
import { hideLoading } from "../hideLoading";
import { render } from "../render";
import { showLoading } from "../showLoading";

export function handelFilter(e) {
  const key = e.target.id;
  const value = e.target.value;
  showLoading();
  filterData(key, value).then((res) => render(res["data"]));
  closeFilter()
  hideLoading();
}
