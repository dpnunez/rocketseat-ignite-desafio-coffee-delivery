import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { DefaultLayoutContainer } from "./styles";

export const DefaultLayout: React.FC = () => (
  <DefaultLayoutContainer>
    <Header />
    <Outlet />
  </DefaultLayoutContainer>
);
