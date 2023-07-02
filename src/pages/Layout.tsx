import { Outlet, Link } from "react-router-dom";
// Home Route
function Layout() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-300">
      <Outlet />
    </div>
  );
}
export default Layout;
