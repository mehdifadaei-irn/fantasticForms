import React from "react";
import { Button, TextField } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CheckIcon from "@mui/icons-material/Check";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import NormalInput from "../../../components/NormalInput";
import { useDispatch } from "react-redux";
import { decrement } from "../../../redux/forms";
import { useNavigate, useParams } from "react-router-dom";
import DateInput from "../../../components/DateInput";
import { colorByEnergy } from "../../../utils/colorForEnergy";
import { useCalculateDatas } from "../../../hooks/useCalculateDatas";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import Label from "../../../components/Label";

const data = [
  "CO2EmissionsCourrent", //0
  "CO2EmissCurrPerFloorArea",
  "EnvironmentImpactCurrent",
  "EnergyConsumptionCurrent",
  "lodgementDate", //add
  "CurentEnergyEfficiency",
  "CurentEnergyRating",
  // "HotWaterEnvEFF",
];

function Form5({ setStep, mainFormik }: any) {
  const navigate = useNavigate();
  const params = useParams();
  const [energy, setEnergy] = React.useState<
    "A" | "B" | "C" | "E" | "D" | "F" | "G"
  >("F");

  const { contorollertype } = useSelector((state: any): any => state.all);

  const dispatch = useDispatch();

  function handleBackWard() {
    dispatch(decrement());
    navigate(`/${params.address}/form3`, { replace: true });
    setStep((prev: number) => prev - 1);
  }
  async function handleCheck() {
    // await formik.validateForm();
    await mainFormik.handleSubmit();
    // console.log("va", formik.isValid);
  }
  const {
    mutate: calculateAllData,
    data: calcData,
    isLoading,
    isSuccess,
  } = useCalculateDatas();

  React.useEffect(() => {
    //@ts-ignore
    setEnergy(calcData?.label);
  }, [isLoading, data]);

  function handleCalculate() {
    calculateAllData({
      Datas: mainFormik.values,
      controlertype: contorollertype,
    });
  }

  return (
    <>
      <form
        onSubmit={mainFormik.handleSubmit}
        className="w-full h-[46%] lg:px-12 flex flex-col md:pt-5"
      >
        <Label label="energy Info" />
        <div className="justify-center xl:pt-10 xl:gap-12 gap-0 py-3 grid grid-rows-2 xl:grid-rows-2 xl:grid-cols-4 grid-cols-3 xl:px-9 px-3 items-center justify-items-center">
          {data.map((item, i) => {
            if (i === 0) {
              return (
                <div key={i} className="w-full h-full">
                  <NormalInput
                    formik={mainFormik}
                    item={item}
                    key={i}
                    unit={"TonsPerYear"}
                  />
                </div>
              );
            }
            if (i === 1) {
              return (
                <div key={i} className="w-full h-full">
                  <NormalInput
                    formik={mainFormik}
                    item={item}
                    key={i}
                    unit={"Tons/year/m"}
                    topUnit="2"
                  />
                </div>
              );
            }
            if (i === 3) {
              return (
                <div key={i} className="w-full h-full">
                  <NormalInput
                    formik={mainFormik}
                    item={item}
                    key={i}
                    unit={"kwh/year/m"}
                    topUnit="2"
                  />
                </div>
              );
            }
            if (i === 4) {
              return (
                // <div key={i} className="w-full h-full flex justify-center">
                //   <DateInput formik={mainFormik} item={item} key={i} />
                // </div>
                <div key={i} className="w-full h-full">
                  <NormalInput formik={mainFormik} item={item} key={i} />
                </div>
              );
            } else {
              return (
                <div key={i} className="w-full h-full">
                  <NormalInput formik={mainFormik} item={item} key={i} />
                </div>
              );
            }
          })}
        </div>
      </form>

      <div className="flex w-full flex-col gap-5 px-10 justify-center ite items-center">
        <div className="flex flex-row mb-2">
          {!isSuccess ? (
            <div></div>
          ) : (
            <>
              {["A", "B", "C", "D", "E", "F", "G"].map((item) => (
                <h2
                  key={item}
                  className={`mx-3 font-bold text-2xl`}
                  style={{
                    color: item == energy ? colorByEnergy(energy) : "#000000ab",
                  }}
                >
                  {item}
                </h2>
              ))}
            </>
          )}
        </div>
        <div className="flex flex-row relative">
          {/* <TextField id="outlined-basic" placeholder="A-G"  variant="outlined" /> */}
          <Button
            sx={{
              height: 60,
              // ml: 8,
            }}
            disabled={isLoading}
            // disabled={true}
            color="success"
            variant="contained"
            onClick={handleCalculate}

            // disabled={true}
          >
            calculate EPC rate
          </Button>
          {isLoading && (
            <CircularProgress className=" absolute right-20 top-2" />
          )}
        </div>
      </div>

      <div className="w-full justify-between flex px-9 mt-auto mb-3">
        <Button
          variant="contained"
          startIcon={<KeyboardReturnIcon />}
          onClick={handleBackWard}
          // disabled={true}
        >
          back
        </Button>
        <Button
          variant="contained"
          onClick={handleCheck}
          endIcon={<CheckIcon />}
        >
          Check
        </Button>
        <Button
          variant="contained"
          endIcon={<ShortcutIcon />}
          // onClick={handleForward}
          disabled
        >
          forward
        </Button>
      </div>
    </>
  );
}

export default Form5;
