import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { TextField, Button, Skeleton } from "@mui/material";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getAddressByPostCode } from "../api/getAddresByPC";
import { setInputs } from "../redux/allInput";
import PersonIcon from "@mui/icons-material/Person";
import { useQuery } from "@tanstack/react-query";
import { getInfo } from "../api/getInfo";
import { useDispatch } from "react-redux";

// const addreses = [
//   { address: "FLAT1 ,RAYMEAD, TENTERDENGROVE " },
//   { address: "Flat 6 Raymead, Tenterden Grove" },
//   { address: "Flat 1 Raymead, Tenterden Grove" },
//   { address: "Flat 4 Raymead, Tenterden Grove" },
//   { address: "Flat 9 Raymead, Tenterden Grove" },
//   { address: "Flat 3 Raymead, Tenterden Grove" },
//   { address: "Flat 7 Raymead, Tenterden Grove" },
//   { address: "Flat 5 Raymead, Tenterden Grove" },
//   { address: "Flat 7, Raymead, Tenterden Grove" },
//   { address: "Flat 8, Raymead, Tenterden Grove" },
// ];

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
  const dispatch = useDispatch();

  const [showList, setShowList] = useState<boolean>(false);
  const [isLoadingInfo, setIsLoadingInfo] = useState<boolean>(true);

  const { data, isLoading, refetch } = useQuery(["address"], () =>
    getAddressByPostCode(formik?.values?.postCode)
  );

  // const {
  //   data: initialData,
  //   isLoading: initLoading,
  //   isError: initErr,
  // } = useQuery({
  //   queryKey: ["initialVals"],
  //   queryFn: () => getInfo(formik.values.postCode, selectAdd),
  // });

  async function handleNavItem(address: string) {
    setIsLoadingInfo(true);
    const data = await getInfo(formik.values.postCode, address);
    console.log(address, "innne");
    setIsLoadingInfo(false);
    dispatch(setInputs(data));
    navigate(`${address}/form1`);
    // if (initErr) {
    //   console.log("naverro Init");
    //   return;
    // }
    // if (!initLoading) {
    //   dispatch(setInputs(initialData));
    //   navigate(`${address}/form1`);
    // }
  }

  // useEffect(() => {
  //   handleNavItem();
  // }, [initialData, initLoading, initErr]);

  return (
    // <div>
    <main className="border-2 w-[80%] h-[93%] rounded-xl flex flex-row p-2 bg-slate-200">
      <div className="w-[35%] h-full bg-blue-700 rounded-xl py-4 xl:py-[1%] px-3 xl:px-6 hidden lg:block">
        <h3 className="text-white f font-semibold">
          IntelligentEnergySolution
        </h3>

        <h4 className=" font-medium xl:font-semibold mt-14 xl:mt-[9%]  text-lg xl:text-lg text-white ">
          Peridict and Optimize Energy Efficiency
        </h4>
        <p className="mt-3 font-light text-blue-200">
          A Holistic Approch to suggst improvment to Energy Efficiency for
          domestic building in the UK.
        </p>

        <div className="rounded-xl text-white py-2 px-0 mt-[4%]  flex">
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
          {showList &&
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
              // <p>he</p>
              data?.map((address: any, i: any) => (
                <li
                  key={i}
                  className="mt-5 h-8 flex items-center px-3 bo border-2 rounded-md border-blue-200 cursor-pointer hover:border-blue-400 transition-all duration-250"
                  // onClick={() => navigate(`${address.address}/form1`)}
                  onClick={() => handleNavItem(address.address)}
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
