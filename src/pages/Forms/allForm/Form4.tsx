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
  "FloorEnergyEFf", // 13
  "FloorEnvEFF", //14
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
    <div className="w-full h-screen overflow-hidden flex flex-col justify-between">
      <form
        onSubmit={mainFormik.handleSubmit}
        className="w-full h-[88%] lg:px-12 pt-2  flex flex-row overflow-y-auto gap-y-4"
      >
        {/* Roof */}
        <div className="w-full flex flex-col relative h-full">
          {/* <Label label="Roof" /> */}
          <p className="bg-slate-200 font-[400] w-[70px] text-center text-zinc-800 tracking-wider text-md absolute left-[2%] -top-[2%]">
            Roof
          </p>
          <div className="grid grid-cols-1 gap-y-3 py-6 border-2 border-[#a8a29e] rounded-md h-full">
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

        <div className="w-full flex flex-col ml-6 gap-y-2 h-full">
          {/* Wall */}
          <div className="w-full border-2 border-[#a8a29e] rounded-md relative h-1/2 flex flex-col justify-between">
            <p className="bg-slate-200 font-[400] w-[50px] text-center text-zinc-800 tracking-wider text-md absolute left-[3%] -top-[4%]">
              Wall
            </p>
            <div className="grid lg:grid-rows-4 lg:grid-cols-1 gap-y-3 py-2 justify-between h-full">
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

          {/* Floor */}
          <div className="w-full  flex flex-col border-2 border-[#a8a29e] rounded-md relative h-1/2">
            {/* <Label label="Floor" /> */}
            <p className="bg-slate-200 font-[400] w-[60px] text-center text-zinc-800 tracking-wider text-md absolute left-[2%] -top-[3%]">
              Floor
            </p>
            <div className="grid grid-rows-4 grid-cols-1 py-2 gap-y-3 h-full justify-between">
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
                if ([13, 14].includes(i)) {
                  return (
                    <div key={i} className="w-full h-[70%]">
                      <NormalInput formik={mainFormik} item={item} />
                    </div>
                  );
                }
              })}
            </div>
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
    </div>
  );
}

export default Form4;
