import { Outlet, Link } from "react-router-dom";
import FormNav from "../../components/FormNav";
import { useQuery } from "@tanstack/react-query";
import { getInfo } from "../../api/getInfo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setErr, setLoading, setVar, setInputs } from "../../redux/allInput";

// FORM LAYOUYT
function Layout() {
  
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setErr(isError));
  //   dispatch(setLoading(isLoading));
  //   dispatch(setInputs(data));
  // }, [data, isLoading, isError]);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-300">
      <main className="border-2 w-[88%] h-[93%] rounded-xl flex flex-col p-2 bg-slate-200">
        {/* <nav className="bg-slate-500">NAvi</nav> */}

        <FormNav />
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;
