import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import FormLayout from "./pages/Forms/Layout";
import Home from "./pages/Home";
import Form1 from "./pages/Forms/allForm/Form1";
import Form2 from "./pages/Forms/allForm/Form2";
import Form3 from "./pages/Forms/allForm/Form3";
import Form4 from "./pages/Forms/allForm/Form4";
import Form5 from "./pages/Forms/allForm/Form5";
// function App() {
//   return <RouterProvider router={router} />;
// }

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":address" element={<FormLayout />}>
            <Route path="form1" element={<Form1 />} />
            <Route path="form2" element={<Form2 />} />
            <Route path="form3" element={<Form3 />} />
            <Route path="form4" element={<Form4 />} />
            <Route path="form5" element={<Form5 />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
