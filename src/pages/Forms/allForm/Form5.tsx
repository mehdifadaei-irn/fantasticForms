import React from "react";
import { Button, TextField } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import NormalInput from "../../../components/NormalInput";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../../redux/forms";
import { useNavigate, useParams } from "react-router-dom";
import { colorByEnergy } from "../../../utils/colorForEnergy";
import { useCalculateDatas } from "../../../hooks/useCalculateDatas";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import Label from "../../../components/Label";
import { Toaster, toast } from "sonner";

const data = [
  "CO2EmissionsCuurrent", //0
  "CO2EmissCurrPerFloorArea",
  "EnvironmentImpactCurrent",
  "EnergyConsumptionCurrent",
  "lodgementDate", //add
  "CurrentEnergyEfficiency",
  "CurrentEnergyRating",
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

  React.useEffect(() => {
    async function handleCheck() {
      // await formik.validateForm();
      await mainFormik.handleSubmit();
      // console.log("va", formik.isValid);
    }
    handleCheck();
  }, []);

  function handleBackWard() {
    dispatch(decrement());
    navigate(`/${params.address}/form3`, { replace: true });
    setStep((prev: number) => prev - 1);
  }

  async function handleForward() {
    // mainFormik.handleSubmit();
    // console.log(Object.entries(mainFormik.values));
    console.log(mainFormik.isValid);
    if (mainFormik.isValid) {
      dispatch(increment);
      navigate(`/${params.address}/form6`, { replace: true });
      setStep((prev: number) => prev + 1);
    } else {
      // console.log(mainFormik.errors);
      toast.error("Please fill out all required fields");
      // const eRrors = Object.entries(mainFormik.errors);
      // // console.log(eRrors[0]);

      // if (eRrors) {
      //   eRrors.map((er, i) => {
      //     //@ts-ignore
      //     toast.error(er[1]);
      //   });
      // }
    }
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
      <div className="w-full h-full flex flex-col justify-between">
        <form
          onSubmit={mainFormik.handleSubmit}
          className="w-[90%] mx-auto h-[46%] lg:px-12 flex flex-col md:pt-5 relative border-2 border-[#a8a29e] rounded-md mt-3"
        >
          <p className="bg-slate-200 font-[400] w-[120px] text-center text-zinc-800 tracking-wider text-md absolute left-[2%] -top-[5%]">
            EnergyInfo
          </p>
          <div className="grid grid-rows-2 grid-cols-4 justify-center justify-items-center items-center gap-y-7 md:pt-6 pt-2">
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

        <div className="flex w-full flex-col gap-5 px-10 justify-center ite items-center -mt-6">
          <div className="flex flex-row">
            {!isSuccess ? (
              <div></div>
            ) : (
              <>
                {["A", "B", "C", "D", "E", "F", "G"].map((item) => (
                  <h2
                    key={item}
                    className={`mx-3 font-bold text-2xl`}
                    style={{
                      color:
                        item == energy ? colorByEnergy(energy) : "#000000ab",
                    }}
                  >
                    {item}
                  </h2>
                ))}
              </>
            )}
          </div>
          <div className="flex flex-col relative gap-y-5 ">
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
            <Button
              sx={{
                height: 60,
                // ml: 8,
              }}
              // disabled={isLoading}
              // disabled={true}
              color="success"
              variant="contained"
              onClick={handleForward}
              endIcon={<ShortcutIcon />}
              // disabled={true}
            >
              OPTIMIZE
            </Button>
            {isLoading && (
              <CircularProgress className=" absolute right-20 top-2" />
            )}
          </div>
        </div>
      </div>

      <Toaster richColors position="bottom-right" />

      <div className="w-full justify-between flex px-9 mt-auto mb-11">
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
          endIcon={<ShortcutIcon />}
          onClick={handleForward}
          disabled
        >
          forward
        </Button>
      </div>
    </>
  );
}

export default Form5;
