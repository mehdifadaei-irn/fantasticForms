import { Outlet, Link } from "react-router-dom";
import Lottie from "lottie-react"
// Home Route
function Layout() {
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-slate-300">
      <Outlet />
      {/* <h1>aa</h1> */}
      {/* <Lottie animationData={load} loop={true} /> */}
    </div>
  );
}
export default Layout;
