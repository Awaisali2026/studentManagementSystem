import { Outlet } from "react-router-dom";
import MainNavbar from "../MainNavbar";

const Layout = () => {
  return (
    <>
      <MainNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
