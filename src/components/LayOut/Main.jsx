import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

function Main() {
  return (
    <>
      <h1>this is root layout</h1>
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
