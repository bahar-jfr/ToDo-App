import { Footer } from "../components";
import { Container } from "../components/container";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { El } from "../library";

export const App = () => {
  const app = El({
    element: "div",
    children: [Header(), Main(), Footer()],
  });
  return Container(app)
};
