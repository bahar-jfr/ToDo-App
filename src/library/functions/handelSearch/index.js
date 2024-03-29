import { getData } from "../../../api/getData";
import { debounce } from "../../helpers/debounce";
import { render } from "../render";

export function handelSearch(e) {
  const searchItem = e.target.value;

  debounce(
    () =>
      getData(1, 5, searchItem).then((res) => {
        render(res.data);
      }),
    2000
  );
}
