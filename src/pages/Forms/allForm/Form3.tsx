import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CheckIcon from "@mui/icons-material/Check";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import NormalInput from "../../../components/NormalInput";
import SelectInput from "../../../components/SelectInput";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/forms";
import { setVar } from "../../../redux/allInput";
import { useNavigate, useParams } from "react-router-dom";

const data = [
  "contorollertype",
  "lightningType",
  "lightingEnergyEFF",
  "lightinEnvEFF",
  "lightingCostCourent", //4
  "lowEnergyFixedLightCount", //add
  "fixedLightingOutletsCount",
  "HotwaterType",
  "HotWaterEnergyEFF",
  "HotWaterEnvEFF",
  "ventilationType", //add
  "hotWaterCostCurrent"
];

function Form3({ setStep, mainFormik }: any) {
  const navigate = useNavigate();
  const params = useParams();

  const { values } = useSelector((state: any): any => state.all);
  const dispatch = useDispatch();

  function handleForward() {
    dispatch(increment());
    // console.log(params);
    // formik.handleSubmit()
    navigate(`/${params.address}/form4`, { replace: true });
    setStep((prev: number) => prev + 1);
  }

  function handleBackWard() {
    dispatch(decrement());
    navigate(`/${params.address}/form2`, { replace: true });
    setStep((prev: number) => prev - 1);
  }

  async function handleCheck() {
    // await formik.validateForm();
    await mainFormik.handleSubmit();
    // dispatch(setVar({ key: "type", value: "thisHAAAAA" }));
    console.log("va", values);
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
                    "byPass",
                    "flowSwitch",
                    "noThermostate",
                    "mainHeatingControlTTZC",
                    "mainHeatingControlTrv",
                    "mainHeatingControlApplianceThermostate",
                    "mainHeatingContorlAcc",
                    "mainHeatingControlCelect",
                    "mainHeatingControlFlatRate",
                    "mainHeatingControlProgrammer",
                    "mainHeatingControlCommunityScheme",
                    "mainHeatingContorolRoomThermostate",
                    "mainHeatingControlBoilerEnergyManager",
                    "mainHeatingControlOtherUnknown",
                  ]}
                />
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
                    "lightingLowEnergy",
                    "lightingNoLowEnergy",
                    "lightingOtherUnknown",
                    "lowEnergyLightingProportion",
                  ]}
                />
              </div>
            );
          }

          if (i === 7) {
            return (
              <div key={i} className="w-full h-full flex justify-center">
                <SelectInput
                  key={i}
                  formik={mainFormik}
                  item={item}
                  subItems={[
                    "hotWaterCommunity",
                    "hotWaterHeatPump",
                    "hotWaterImmersion",
                    "hotWaterInstantaneous",
                    "hotWaterFromMainSystem",
                    "hotWaterSecondarySystem",
                    "hotWaterGasBoiler",
                    "hotWaterOtherSystem",
                    "hotWaterUnknownSystem",
                  ]}
                />
              </div>
            );
          }
          if (i === 10) {
            return (
              <div key={i} className="w-full h-full flex justify-center">
                <SelectInput
                  key={i}
                  formik={mainFormik}
                  item={item}
                  subItems={[
                    "mechanicalVentilationNatural",
                    "mechanicalVentilationMechanicalExtract",
                    "mechanicalVentilationMechanicalSupplyExtract",
                    "mechanicalVentilationMechanicalUnknown",
                  ]}
                />
              </div>
            );
          }
          if (i === 4) {
            return (
              <div key={i} className="w-full h-full">
                <NormalInput
                  formik={mainFormik}
                  item={item}
                  key={i}
                  unit={"£ per year"}
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
          onClick={handleForward}
        >
          forward
        </Button>
      </div>
    </>
  );
}

export default Form3;
