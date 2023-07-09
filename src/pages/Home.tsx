import { useState } from "react";
import { useFormik } from "formik";
import { TextField, Button, Skeleton } from "@mui/material";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getAddressByPostCode } from "../api/getAddresByPC";

import PersonIcon from "@mui/icons-material/Person";
import { useQuery } from "@tanstack/react-query";

const addreses = [
  { address: "FLAT 1, RAYMEAD, TENTERDEN GROVE" },
  { address: "Flat 6 Raymead, Tenterden Grove" },
  { address: "Flat 1 Raymead, Tenterden Grove" },
  { address: "Flat 4 Raymead, Tenterden Grove" },
  { address: "Flat 9 Raymead, Tenterden Grove" },
  { address: "Flat 3 Raymead, Tenterden Grove" },
  { address: "Flat 7 Raymead, Tenterden Grove" },
  { address: "Flat 5 Raymead, Tenterden Grove" },
  { address: "Flat 7, Raymead, Tenterden Grove" },
  { address: "Flat 8, Raymead, Tenterden Grove" },
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
      postCode: "",
    },
    validationSchema: PostCodeSchema,
    onSubmit: (values) => {
      refetch();
      setShowList(true);
      console.log(data);
    },
  });

  const navigate = useNavigate();

  const [showList, setShowList] = useState<boolean>(false);

  const { data, isLoading, refetch, isError } = useQuery(["address"], () =>
    getAddressByPostCode(formik?.values?.postCode)
  );

  return (
    // <div>
    <main className="border-2 w-[80%] h-[93%] rounded-xl flex flex-row p-2 bg-slate-200">
      <div className="w-[35%] bg-blue-700 rounded-xl py-4 xl:py-8 px-3 xl:px-6 hidden lg:block">
        <h3 className="text-white f font-semibold">
          MLForms {isLoading && "hello"}
        </h3>

        <h4 className=" font-medium xl:font-bold mt-14 xl:mt-16  text-lg xl:text-xl text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h4>
        <p className="mt-3 font-extralight text-blue-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia odit
          earum placeat! dolor sit amet
        </p>

        <div className="rounded-xl text-white py-2 px-0 mt-10  flex">
          <img
            src="/mage.jpg"
            alt=""
            width={"73%"}
            className="r rounded-lg"
            height={"40%"}
          />
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

        <ul className="h-full ov overflow-y-auto">
          {(showList) &&
            (isLoading ? (
              <div>
                {[0, 1, 2, 3, 4, 5].map((item, i) => (
                  <Skeleton
                    key={item}
                    variant={"rounded"}
                    sx={{
                      mt: 4,
                    }}
                    // width={}
                    height={40}
                    animation={"pulse"}
                  />
                ))}
              </div>
            ) : (
              addreses.map((address, i) => (
                <li
                  key={i}
                  className="mt-5 h-8 flex items-center px-3 bo border-2 rounded-md border-blue-200 cursor-pointer hover:border-blue-400 transition-all duration-250"
                  onClick={() => navigate(`${address}/form1`)}
                >
                  <p>{address.address}</p>
                </li>
              ))
            ))}
        </ul>
      </div>
    </main>
    // </div>
  );
}

export default Home;
