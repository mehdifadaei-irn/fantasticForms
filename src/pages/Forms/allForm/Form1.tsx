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
import Label from "../../../components/Label";

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
  // "TariffType",
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
          className="w-full h-[76%]  lg:px-12 flex flex-row md:pt-3 "
        >
          {/* Property setting */}
          <div className=" w-full relative">
            <div className="flex justify-start absolute left-6 -top-4">
              {/* <Label label="propertySetting" /> */}
              <p className="bg-slate-200 font-[400] w-[200px] text-center text-zinc-800 tracking-wider text-lg">
                propertySetting
              </p>
            </div>
            <div className="w-full grid grid-cols-2 gap-y-4 border-2 border-[#a8a29e] pt-8 pb-5 rounded-md shadow-xl">
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
          </div>
          <div className="w-full flex flex-col ml-5 gap-y-4">
            {/* Window setting */}
            <div className="w-full flex flex-col  h-[60%] relative">
              {/* <Label label="windowsSetting" /> */}
              <p className="bg-slate-200 font-[400] w-[210px] left-4 -top-4 text-center text-zinc-800 tracking-wider text-lg absolute ">
                windowsSetting
              </p>
              <div className="w-full grid grid-cols-1 items-center justify-center h-full border-2 border-[#a8a29e] rounded-md pt-5 px-3">
                {data.map((item, i) => {
                  if ([16, 17].includes(i)) {
                    return (
                      <div
                        key={i}
                        className="h-[70%] flex justify-center w-full "
                      >
                        <NormalInput
                          formik={mainFormik}
                          item={item}
                          w={"59%"}
                        />
                      </div>
                    );
                  } else if (i === 15) {
                    return (
                      <div
                        key={i}
                        className="w-full h-[60px] flex justify-center"
                      >
                        <SelectInput
                          w={"59%"}
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
                          w={"59%"}
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
            {/* Tenure */}
            <div className="w-full border-2 border-[#a8a29e] rounded-md h-[20%] relative ">
              {/* <Label label="Tenure" /> */}
              <p className="bg-slate-200 font-[400] w-[80px] left-4 -top-3 text-center text-zinc-800 tracking-wider text-md absolute ">
                Tenure
              </p>
              <div className="w-full h-full flex items-center">
                {data.map((item, i) => {
                  // 14,
                  if ([14].includes(i)) {
                    return (
                      <div
                        key={i}
                        className="w-full h-[60px] flex justify-center pl-[2%] items-center"
                      >
                        <SelectInput
                          w={"59%"}
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
            </div>
            <div className="border-2 border-[#a8a29e] rounded-md py-6 px-3 flex justify-center relative shadow-xl">
              <p className="bg-slate-200 font-[400] w-[80px] left-4 -top-3 text-center text-zinc-800 tracking-wider text-md absolute">
                Tariff
              </p>
              <SelectInput
                formik={mainFormik}
                item={"TariffType"}
                key={"TariffType"}
                w={"59%"}
                subItems={[
                  "tariff24HrsOrDualOrBoth",
                  "tariffOffPeak",
                  "tariffSingle",
                  "tariffStandard",
                  "tariffUnknown",
                ]}
              />
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
