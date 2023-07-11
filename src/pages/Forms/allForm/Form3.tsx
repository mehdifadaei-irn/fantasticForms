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
  "lightingCostCourent",
  "fixedLightingOutletsCount",
  "HotwaterType",
  "HotWaterEnergyEFF",
  "HotWaterEnvEFF",
];

const validationSchema = yup.object({
  contorollertype: yup.string(),
  lightningType: yup.string(),
  lightingEnergyEFF: yup.string(),
  lightinEnvEFF: yup.string(),
  lightingCostCourent: yup.string(),
  fixedLightingOutletsCount: yup.string(),
  HotwaterType: yup.string(),
  HotWaterEnergyEFF: yup.string(),
  HotWaterEnvEFF: yup.string(),
});

function Form3() {
  const navigate = useNavigate();
  const params = useParams();
  const { inputs } = useSelector((state: any): any => state.all);

  const formik = useFormik({
    initialValues: {
      contorollertype: inputs?.controller_settings?.type,
      lightningType: inputs?.lightening_settings?.type,
      lightingEnergyEFF: inputs?.lightening_settings?.lighting_energy_eff,
      lightinEnvEFF: inputs?.lightening_settings?.lighting_env_eff,
      lightingCostCourent: inputs?.lightening_settings?.lighting_cost_current,
      fixedLightingOutletsCount:
        inputs?.lightening_settings?.fixed_lighting_outlets_count,
      HotwaterType: inputs?.hot_water_settings?.type,
      HotWaterEnergyEFF: inputs?.hot_water_settings?.hot_water_energy_eff,
      HotWaterEnvEFF: inputs?.hot_water_settings?.hot_water_env_eff,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const { values } = useSelector((state: any): any => state.all);
  const dispatch = useDispatch();

  function handleForward() {
    dispatch(increment());
    console.log(params);
    // formik.handleSubmit()
    navigate(`/${params.address}/form4`, { replace: true });
  }

  function handleBackWard() {
    dispatch(decrement());
    navigate(`/${params.address}/form2`, { replace: true });
  }

  async function handleCheck() {
    // await formik.validateForm();
    await formik.handleSubmit();
    dispatch(setVar({ key: "type", value: "thisHAAAAA" }));
    console.log("va", values);
  }
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full h-[76%] justify-center xl:gap-5 gap-0 py-3 grid grid-rows-4 xl:grid-rows-3 xl:grid-cols-4 grid-cols-3 xl:px-9 px-3 items-center justify-items-center"
      >
        {data.map((item, i) => {
          if (i === 0) {
            return (
              <div key={i} className="w-full h-full">
                <SelectInput
                  key={i}
                  formik={formik}
                  item={item}
                  subItems={[
                    "mainHeatingControlTTZC",
                    "mainHeatingControlTrv",
                    "mainHeatingControlApplianceThermostate",
                    "mainHeatingContorlAcc",
                    "mainHeatingControlCelect",
                    "mainHeatingControlFlatRate",
                    "mainHeatingControlProgrammer",
                    "mainHeatingControlCommunityScheme",
                    "mainHeatingControlRoomThermostrate",
                    "mainHeatingControlBoilerEnergyManager",
                    "mainHeating",
                    "mainHeatingControlOtherUnknown",
                  ]}
                />
              </div>
            );
          }
          if (i === 1) {
            return (
              <div key={i} className="w-full h-full">
                <SelectInput
                  key={i}
                  formik={formik}
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

          if (i === 6) {
            return (
              <div key={i} className="w-full h-full">
                <SelectInput
                  key={i}
                  formik={formik}
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
          } else {
            return (
              <div key={i} className="w-full h-full">
                <NormalInput formik={formik} item={item} key={i} />
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
