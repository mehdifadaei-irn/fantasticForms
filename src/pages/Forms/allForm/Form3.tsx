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
import MultiSelect from "../../../components/MultiSelect";
import Label from "../../../components/Label";

const data = [
  "contorollertype", //0
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
  "hotWaterCostCurrent", //11
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
    <div className="w-full h-screen overflow-hidden flex flex-col justify-between">
      <form
        onSubmit={mainFormik.handleSubmit}
        className="w-full  lg:px-12 flex flex-col md:pt-5 overflow-y-auto overflow-x-hidden gap-y-2"
      >
        {/* Lightening settings */}
        <div className="w-full flex flex-col relative">
          <p className="bg-slate-200 font-[400] w-[210px] text-center text-zinc-800 tracking-wider text-md absolute left-[1%] -top-[6%]">
            Lightening settings
          </p>
          <div className="grid lg:grid-rows-2 lg:grid-cols-3 gap-y-8 border-2 border-[#a8a29e] rounded-md py-7 px-3 shadow-md">
            {data.map((item, i) => {
              // 14,
              if ([2, 3, , 5, 6].includes(i)) {
                return (
                  <div key={i} className="w-full h-[70%]">
                    <NormalInput formik={mainFormik} item={item} />
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
                        "lightingLowEnergy",
                        "lightingNoLowEnergy",
                        "lightingOtherUnknown",
                        "lowEnergyLightingProportion",
                      ]}
                    />
                  </div>
                );
              } else if (i === 4) {
                return (
                  <div key={i} className="w-full h-full">
                    <NormalInput
                      formik={mainFormik}
                      item={item}
                      key={i}
                      unit={"£ per year"}
                      // startUnit={"%"}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div className="flex w-full flex-row">
          {/* Hot Water */}
          <div className="w-[50%] xl:mt-6 relative border-2 border-[#a8a29e] rounded-md shadow-xl">
            {/* <Label label="" /> */}
            <p className="bg-slate-200 font-[400] w-[110px] text-center text-zinc-800 tracking-wider text-md absolute left-[3%] -top-[6%]">
              Hot Water
            </p>
            <div className="grid lg:grid-rows-4 lg:grid-cols-1 gap-y-4 gap-x-3 py-6">
              {data.map((item, i) => {
                // 14,
                if ([8, 9].includes(i)) {
                  return (
                    <div key={i} className="w-full h-[70%]">
                      <NormalInput formik={mainFormik} item={item} />
                    </div>
                  );
                } else if (i === 7) {
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
                } else if (i === 11) {
                  return (
                    <div key={i} className="w-full h-full">
                      <NormalInput
                        formik={mainFormik}
                        item={item}
                        key={i}
                        unit={"£ per year"}
                        // startUnit={"%"}
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>

          <div className="flex gap-y-7 flex-col w-[50%] ml-6 md:mt-6 mt-2 justify-between">
            {/* Contoroller type */}
            <div className=" w-full py-8 justify-center items-center flex flex-col relative border-2 border-[#a8a29e] rounded-md  shadow-xl">
              {/* <Label label="ControllerType" /> */}
              <p className="bg-slate-200 font-[400] w-[130px] text-center text-zinc-800 tracking-wider text-md absolute left-[2%] -top-[15%]">
                ControllerType
              </p>
              {data.map((item, i) => {
                // 14,
                if ([0].includes(i)) {
                  return (
                    <div
                      key={i}
                      className="w-full h-full flex justify-center ml-[3%] "
                    >
                      <MultiSelect
                        w="50%"
                        key={i}
                        formik={mainFormik}
                        item={item}
                        subItems={[
                          "ControlTtzc",
                          "ControlTrv",
                          "ControlApplianceThermostate",
                          "ControlCcc",
                          "ControlCelect",
                          "ControlFlat_rate",
                          "ControlProgrammer",
                          "ControlCommunity_scheme",
                          "ControlRoom_thermostat",
                          "ControlBoiler_energy_manager",
                          "ControlByPass",
                          "ControlFlowSwitch",
                          "ControlNoThermostat",
                          "ControlOtherUnknown",
                        ]}
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>

            {/* Ventilation */}
            <div className="w-full flex flex-col relative border-2 border-[#a8a29e] rounded-md py-8 justify-center items-center shadow-xl">
              {/* <Label label="Ventilation" /> */}
              <p className="bg-slate-200 font-[400] w-[130px] text-center text-zinc-800 tracking-wider text-md absolute left-[2%] -top-[15%]">
                Ventilation
              </p>
              {data.map((item, i) => {
                // 14,
                if ([10].includes(i)) {
                  return (
                    <div
                      key={i} 
                      className="w-full h-full flex justify-center ml-[3%] "
                    >
                      <SelectInput
                        w="50%"
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
                } else {
                  return null;
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
          onClick={handleForward}
        >
          forward
        </Button>
      </div>
    </div>
  );
}

export default Form3;
