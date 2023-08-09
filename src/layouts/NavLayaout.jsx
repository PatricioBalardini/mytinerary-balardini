import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

export default function NavLayaout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
