import { useState } from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";

const addreses = [
  "address1",
  "address2",
  "address3",
  "address4",
  "address5",
  "address6",
];

const PostCodeSchema = Yup.object().shape({
  postCode: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function Home() {
  const formik = useFormik({
    initialValues: {
      postCode: null,
    },
    validationSchema: PostCodeSchema,
    onSubmit: (values) => {
      setShowList(true);
    },
  });

  const navigate = useNavigate();

  const [showList, setShowList] = useState<boolean>(false);

  return (
    // <div>
    <main className="border-2 w-[80%] h-[93%] rounded-xl flex flex-row p-2 bg-slate-200">
      <div className="w-[35%] bg-blue-700 rounded-xl py-4 xl:py-8 px-3 xl:px-6 hidden lg:block">
        <h3 className="text-white f font-semibold">MLForms</h3>

        <h4 className=" font-medium xl:font-bold mt-14 xl:mt-16  text-lg xl:text-xl text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h4>
        <p className="mt-3 font-extralight text-blue-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odit
          earum placeat! dolor sit amet
        </p>

        <div className="rounded-xl text-white py-2 px-0 mt-10  flex">
          <img src="/mage.jpg" alt="" width={"80%"} className="r rounded-lg" height={"40%"} />
        </div>
      </div>
      <div className="flex-1 rounded-xl py-12 px-8">
        <form onSubmit={formik.handleSubmit} className="flex ">
          <TextField
            fullWidth
            id="postCode"
            name="postCode"
            label="postcode"
            value={formik.values.postCode}
            onChange={formik.handleChange}
            error={formik.touched.postCode && Boolean(formik.errors.postCode)}
            helperText={formik.touched.postCode && formik.errors.postCode}
            className=""
            // autoFocus={true}
            size="small"
            // sx={{ height: "50px !important" }}
          />

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ width: "100px", marginLeft: 1, height: "45px" }}
          >
            Search
          </Button>
        </form>

        <ul>
          {showList &&
            addreses.map((address, i) => (
              <li
                key={i}
                className="mt-5 h-8 flex items-center px-3 bo border-2 rounded-md border-blue-200 cursor-pointer hover:border-blue-400 transition-all duration-250"
                onClick={() => navigate(`${address}/form1`)}
              >
                <p>{address}</p>
              </li>
            ))}
        </ul>
      </div>
    </main>
    // </div>
  );
}

export default Home;
