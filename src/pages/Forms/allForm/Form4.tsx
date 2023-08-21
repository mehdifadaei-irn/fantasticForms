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
import Label from "../../../components/Label";

const data = [
  "wallInsullation",
  "wallType",
  "WallsEnergyEFF",
  "WallsEnvEFF", //3
  "RoofInsulation",
  "RoofType",
  "RoofEnergyEFF",
  "RoofEnvEFF",
  "RoofLoftInsulationThickness", //8
  "RoofThermalTransmittance", //9
  "photoSupply", //add
  "FloorInsulation",
  "FloorType",
  // "FloorEnergyEFf", // 4/ 7/ 2
  // "FloorEnvEFF",
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
        className="w-full h-[76%] lg:px-12  flex flex-col md:pt-5 overflow-y-auto gap-y-4"
      >
        {/* Wall */}
        <div className="w-full ">
          <Label label="Wall" />
          <div className="grid lg:grid-rows-1 lg:grid-cols-4 gap-x-3 pt-3 gap-y-4 ">
            {data.map((item, i) => {
              // 14,
              if ([2, 3].includes(i)) {
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
                        "wallsNoInsulation",
                        "wallsLimitedInsulation",
                        "wallsFullyInsulated",
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
                        "wallsBrick",
                        "wallsCavity",
                        "wallsCob",
                        "wallsGranite",
                        "wallsParkHome",
                        "wallsSedimentary",
                        "wallsSystemBuilt",
                        "wallsTimber",
                        "wallsOtherUnknown",
                        // "wallsThermalTransmittance",
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
        {/* Roof */}
        <div className="w-full flex flex-col">
          <Label label="Roof" />
          <div className="grid lg:grid-rows-2 lg:grid-cols-4 grid-rows-4 grid-cols-2 md:gap-y-15 gap-y-10 pt-4">
            {data.map((item, i) => {
              // 14,
              if ([6, 7].includes(i)) {
                return (
                  <div key={i} className="w-full h-[70%]">
                    <NormalInput formik={mainFormik} item={item} />
                  </div>
                );
              } else if (i === 4) {
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
              } else if (i === 8) {
                return (
                  <div key={i} className="w-full h-full ">
                    <NormalInput
                      formik={mainFormik}
                      item={item}
                      key={i}
                      unit="mm"
                    />
                  </div>
                );
              } else if (i === 9) {
                return (
                  <div key={i} className="w-full h-full">
                    <NormalInput
                      formik={mainFormik}
                      item={item}
                      key={i}
                      unit="W/m2k"
                    />
                  </div>
                );
              } else if (i === 10) {
                return (
                  <div key={i} className="w-full h-full">
                    <NormalInput
                      formik={mainFormik}
                      item={item}
                      key={i}
                      startUnit={"%"}
                    />
                  </div>
                );
              } else if (i === 5) {
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
              } else {
                return null;
              }
            })}
          </div>
        </div>
        {/* Floor */}
        <div className="w-full  flex flex-col">
          <Label label="Floor" />
          <div className="grid grid-rows-2 grid-cols-4 gap-y-10 pt-4">
            {data.map((item, i) => {
              // 14,
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
                        "floorDwellingBelow",
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
                      subItems={[
                        "floorSolid",
                        "floorSuspended",
                        "floorOtherType",
                      ]}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
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
