import { Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CheckIcon from "@mui/icons-material/Check";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import NormalInput from "../../../components/NormalInput";
import SelectInput from "../../../components/SelectInput";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../../redux/forms";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Skeleton } from "@mui/material";

const data = [
  "propertyType", //0
  "builtForm", //1
  "flatTopStory", //2
  "heatLossCorridor",
  "unHeatedCorridorLength", //4
  "extentionCount",
  "totalFloorArea", //6
  "floorLevel",
  "floorHeight", //8
  "numberHabitableRooms",
  "numberHeatedRooms",
  "numberOpenFireLaces",
  "flatStoreyCount", //add
  "constructionAgeBandCategory", //add //14
  "tenure", //+12
  "GlazingType", //+13
  "WindowsEnergyEFF",
  "WindowsEnvEFF",
  "multiGlazeProportion", //add
];

function Form1({ setStep, mainFormik }: any) {
  const navigate = useNavigate();
  const params = useParams();

  const { isLoading } = useSelector((state: any): any => state.all);

  const dispatch = useDispatch();

  function handleForward() {
    dispatch(increment());
    navigate(`/${params.address}/form2`, { replace: true });
    setStep((prev: number) => prev + 1);
  }

  async function handleCheck() {
    // await mainFormik.validateForm();
    // console.log(mainFormik.values)
    await mainFormik.handleSubmit();
    // console.log(isLoading, "Load");
    // console.log(inputs?.property_setting?.property_type, "si");
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{params.address}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {isLoading ? (
        <div className="w-full h-[76%] justify-center xl:gap-5 gap-0 py-3 grid grid-rows-4 xl:grid-rows-3 xl:grid-cols-4 grid-cols-3 xl:px-9 px-3 items-center justify-items-center">
          {[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
            <div key={i}>
              <Skeleton variant="rounded" width={200} height={60} />
            </div>
          ))}
        </div>
      ) : (
        <form
          // onSubmit={mainFormik.handleSubmit}
          className="w-full h-[76%] flex justify-center flex-col md:px-5 px-2 pt-6"
        >
          <div className=" w-full h-[50%] grid lg:grid-rows-3 lg:grid-cols-5 grid-rows-4 grid-cols-4 items-center lg:pl-1">
          {/* Property setting */}
            <div className="w-full h-[70%] flex justify-start">
              <h4 className=" font-semibold text-zinc-800 tracking-wider text-lg pl-5  -translate-y-4 ">
                propertySetting
              </h4>
            </div>
            {data.map((item, i) => {
              //0 , 1, 2, 4, 6 , 8
              if ([3, 5, 7, 9, 10, 11, 12, 13].includes(i)) {
                return (
                  <div key={i} className="w-full h-[70%]">
                    <NormalInput formik={mainFormik} item={item} />
                  </div>
                );
              } else if (i === 0) {
                return (
                  <div key={i} className="w-full h-full flex justify-center">
                    <SelectInput
                      key={i}
                      formik={mainFormik}
                      item={item}
                      subItems={[
                        "house",
                        "flat",
                        "maisonette",
                        "bungalow",
                        "park home",
                      ]}
                    />
                  </div>
                );
              } else if (i === 1) {
                return (
                  <div key={i} className="w-full h-full flex justify-center">
                    <SelectInput
                      key={i}
                      formik={mainFormik}
                      item={item}
                      subItems={[
                        "detached",
                        "semi-Detached",
                        "midTerrace",
                        "end-Terrace",
                        "enclosed Mid-Terrace",
                        "enclosed End-Terrace",
                      ]}
                    />
                  </div>
                );
              } else if (i === 2) {
                return (
                  <div key={i} className="w-full h-full flex justify-center">
                    <SelectInput
                      key={i}
                      formik={mainFormik}
                      item={item}
                      subItems={["Yes", "No"]}
                    />
                  </div>
                );
              } else if (i === 4) {
                return (
                  <div key={i} className="w-full h-full ">
                    <NormalInput formik={mainFormik} item={item} unit={"m"} />
                  </div>
                );
              } else if (i === 6) {
                return (
                  <div key={i} className="w-full h-full">
                    <NormalInput
                      formik={mainFormik}
                      item={item}
                      unit={"m"}
                      topUnit={"2"}
                    />
                  </div>
                );
              } else if (i === 8) {
                return (
                  <div key={i} className="w-full h-full">
                    <NormalInput formik={mainFormik} item={item} unit="m" />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          {/* Tenure */}
          <div className="w-full flex-1 xl:pl-7 md:pl-4">
            <h4 className=" font-semibold text-zinc-800 tracking-wider text-lg">
              Tenure
            </h4>
            {data.map((item, i) => {
              // 14,
              if ([14].includes(i)) {
                return (
                  <div key={i} className="w-full h-full flex justify-start ">
                    <SelectInput
                      w={"21%"}
                      key={i}
                      formik={mainFormik}
                      item={item}
                      subItems={[
                        "tenureOwnerOccupied",
                        "tenurePrivateRent",
                        "tenureSocialRent",
                        "tenureUnknown",
                      ]}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          {/* Window setting */}
          <div className="w-full h-[30%] flex flex-col justify-between ">
            <h4 className=" font-semibold text-zinc-800 tracking-wider text-lg ml-6 ">
              windowsSetting
            </h4>
            <div className="w-full h-[60%] grid grid-rows-1 gap-x-8 grid-cols-4 items-start justify-center  xl:pl-7 md:pl-4">
              {data.map((item, i) => {
                if ([16, 17].includes(i)) {
                  return (
                    <div key={i} className="w-full h-[70%] flex justify-start">
                      <NormalInput formik={mainFormik} item={item} w={"100%"} />
                    </div>
                  );
                } else if (i === 15) {
                  return (
                    <div key={i} className="w-full h-full flex justify-start">
                      <SelectInput
                        w={"80%"}
                        key={i}
                        formik={mainFormik}
                        item={item}
                        subItems={[
                          "windowsSingleGlazed",
                          "windowsSecondaryGlazed",
                          "windowsDoubleGlazed",
                          "windowsTripleGlazed",
                          "windowsHighPerformanceGlazed",
                          "windowsMixedGlazed",
                          "windowsOtherUnknownGlazed",
                        ]}
                      />
                    </div>
                  );
                } else if (i === 18) {
                  return (
                    <div key={i} className="w-full h-full">
                      <NormalInput
                        w={"70%"}
                        formik={mainFormik}
                        item={item}
                        // unit="m"
                        startUnit="%"
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          
        </form>
      )}

      <div className="w-full justify-between flex px-9 mt-3 mb-3">
        <Button
          variant="contained"
          startIcon={<KeyboardReturnIcon />}
          disabled={true}
        >
          back
        </Button>
        <Button
          variant="contained"
          type={"button"}
          endIcon={<CheckIcon />}
          onClick={handleCheck}
        >
          Check
        </Button>
        <Button
          variant="contained"
          endIcon={<ShortcutIcon />}
          onClick={handleForward}
        >
          forward
        </Button>
      </div>
    </>
  );
}

export default Form1;
