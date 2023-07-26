import React from "react";
import { Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CheckIcon from "@mui/icons-material/Check";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import NormalInput from "../../../components/NormalInput";
import SelectInput from "../../../components/SelectInput";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/forms";
import { useNavigate, useParams } from "react-router-dom";

const data = [
  "wallInsullation",
  "wallType",
  "WallsEnergyEFF",
  "WallsEnvEFF",
  "RoofInsulation",
  "RoofType",
  "RoofEnergyEFF",
  "RoofEnvEFF",
  "RoofLoftInsulationThickness",//8
  "RoofThermalTransmittance", //9
  "photoSupply",//add
  "FloorInsulation",
  "FloorType",
  "FloorEnergyEFf",
  "FloorEnvEFF",
];

function Form4({ setStep, mainFormik }: any) {
  const navigate = useNavigate();
  const params = useParams();

  const dispatch = useDispatch();

  // function handleForward() {
  //   dispatch(increment());
  //   console.log(params);
  //   // formik.handleSubmit()
  //   navigate(`/${params.address}/form5`, { replace: true });
  // }
  function handleForward() {
    dispatch(increment());
    console.log(params);
    // formik.handleSubmit()
    navigate(`/${params.address}/form5`, { replace: true });
    setStep((prev: number) => prev + 1);
  }

  function handleBackWard() {
    dispatch(decrement());
    navigate(`/${params.address}/form4`, { replace: true });
    setStep((prev: number) => prev - 1);
  }

  async function handleCheck() {
    // await formik.validateForm();
    await mainFormik.handleSubmit();
    console.log("va", mainFormik.isValid);
  }

  return (
    <>
      <form
        onSubmit={mainFormik.handleSubmit}
        className="w-full h-[76%] justify-center xl:gap-5 gap-0 py-3 grid grid-rows-4 xl:grid-rows-3 xl:grid-cols-4 grid-cols-3 xl:px-9 px-3 items-center justify-items-center"
      >
        {data.map((item, i) => {
          if (i === 0) {
            return (
              <div key={i} className="w-full h-full flex justify-center">
                <SelectInput
                  key={i}
                  formik={mainFormik}
                  item={item}
                  subItems={[
                    "wallsNoInsulation",
                    "wallsLimitedInsulation",
                    "wallsFullyInsulated",
                  ]}
                />
              </div>
            );
          }
          if (i === 8) {
            return (
              <div key={i} className="w-full h-full ">
                <NormalInput formik={mainFormik} item={item} key={i} unit="mm" />
              </div>
            );
          }
          if (i === 9) {
            return (
              <div key={i} className="w-full h-full">
                <NormalInput formik={mainFormik} item={item} key={i} unit="W/m2k" />
              </div>
            );
          }
          if (i === 1) {
            return (
              <div key={i} className="w-full h-full flex justify-center">
                <SelectInput
                  key={i}
                  formik={mainFormik}
                  item={item}
                  subItems={[
                    "wallsBrick",
                    "wallsCavity",
                    "wallsCob",
                    "wallsGranite",
                    "wallsParkHome",
                    "wallsSedimentary",
                    "wallsSystemBuildt",
                    "wallsTimber",
                    "wallsOterUnknown",
                    "wallsTermalTransmitance",
                  ]}
                />
              </div>
            );
          }
          if (i === 4) {
            return (
              <div key={i} className="w-full h-full flex justify-center">
                <SelectInput
                  key={i}
                  formik={mainFormik}
                  item={item}
                  subItems={[
                    "roofFullyInsulated",
                    "roofLimitedInsulated",
                    "roofNoInsulation",
                  ]}
                />
              </div>
            );
          }
          if (i === 5) {
            return (
              <div key={i} className="w-full h-full flex justify-center">
                <SelectInput
                  key={i}
                  formik={mainFormik}
                  item={item}
                  subItems={[
                    "roofFlatNearHorizontalRoof",
                    "roofPitched",
                    "roofRoom",
                    "roofOtherUnknown",
                  ]}
                />
              </div>
            );
          }
          if (i === 11) {
            return (
              <div key={i} className="w-full h-full flex justify-center">
                <SelectInput
                  key={i}
                  formik={mainFormik}
                  item={item}
                  subItems={[
                    "floorNoInsulation",
                    "floorLimitedInsulation",
                    "floorFullyInsulated",
                    "floorDwelingBelow",
                  ]}
                />
              </div>
            );
          }
          if (i === 12) {
            return (
              <div key={i} className="w-full h-full flex justify-center">
                <SelectInput
                  key={i}
                  formik={mainFormik}
                  item={item}
                  subItems={["floorSolid", "floorSuspended", "floorOtherType"]}
                />
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
      </form>

      <div className="w-full justify-between flex px-9 mt-3 mb-3">
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
          // disabled={true}
          onClick={handleForward}
        >
          forward
        </Button>
      </div>
    </>
  );
}

export default Form4;
