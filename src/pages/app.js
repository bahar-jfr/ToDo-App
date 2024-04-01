import { getData } from "../api/getData";
import { Footer } from "../components";
import { Container } from "../components/container";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { El } from "../library";
import { page } from "../library/functions/handelSubmit";
import { render } from "../library/functions/render";

export const App = () => {
   getData(page.currentPage, page.perPge).then((res) => {
    render(res.data.data);
  });
  const app = El({
    element: "div",
    children: [Header(), Main(), Footer()],
  });
  return Container(app);
};
