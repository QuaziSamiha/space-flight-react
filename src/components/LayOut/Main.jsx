import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

function Main() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
