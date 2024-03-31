import { filterData } from "../../../api/filterData";
import { render } from "../render";

export function handelFilter(e) {
  const key = e.target.id;
  const value = e.target.value;

  filterData(key, value).then((res) => render(res["data"]));
}
