import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <h1>this is root layout</h1>
      <Outlet />
    </>
  );
}

export default Main;
