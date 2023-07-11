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
  "RoofLoftInsulationThickness",
  "RoofThermalTransmittance",
  "FloorInsulation",
  "FloorType",
  "FloorEnergyEFf",
  "FloorEnvEFF",
];

const validationSchema = yup.object({
  wallInsullation: yup.string(),
  wallType: yup.string().required("wallType is required!"),
  WallsEnergyEFF: yup.string(),
  WallsEnvEFF: yup.string(),
  RoofInsulation: yup.string(),
  RoofType: yup.string().required("RoofType is required!"),
  RoofEnergyEFF: yup.string(),
  RoofEnvEFF: yup.string(),
  RoofLoftInsulationThickness: yup.string(),
  RoofThermalTransmittance: yup.string(),
  FloorInsulation: yup.string(),
  FloorType: yup.string(),
  FloorEnergyEFf: yup.string(),
  FloorEnvEFF: yup.string(),
});

function Form5() {
  const navigate = useNavigate();
  const params = useParams();
  const { inputs } = useSelector((state: any): any => state.all);

  const formik = useFormik({
    initialValues: {
      wallInsullation: inputs?.wall_settings?.wall_insulation,
      wallType: inputs?.wall_settings?.wall_type,
      WallsEnergyEFF: inputs?.wall_settings?.walls_energy_eff,
      WallsEnvEFF: inputs?.wall_settings?.walls_env_eff,
      RoofInsulation: inputs?.roof_settings?.roof_insulation,
      RoofType: inputs?.roof_settings?.roof_type,
      RoofEnergyEFF: inputs?.roof_settings?.roof_energy_eff,
      RoofEnvEFF: inputs?.roof_settings?.roof_env_eff,
      RoofLoftInsulationThickness:
        inputs?.roof_settings?.roof_loft_insulation_thickness,
      RoofThermalTransmittance:
        inputs?.roof_settings?.roof_thermal_transmittance,
      FloorInsulation: inputs?.floor_settings?.floor_insulation,
      FloorType: inputs?.floor_settings?.floor_type,
      FloorEnergyEFf: inputs?.floor_settings?.floor_energy_eff,
      FloorEnvEFF: inputs?.floor_settings?.floor_env_eff,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
    },
  });

  const { step } = useSelector((state: any): any => state.counter);
  const dispatch = useDispatch();

  // function handleForward() {
  //   dispatch(increment());
  //   console.log(params);
  //   // formik.handleSubmit()
  //   navigate(`/${params.address}/form5`, { replace: true });
  // }

  function handleBackWard() {
    dispatch(decrement());
    navigate(`/${params.address}/form4`, { replace: true });
  }

  async function handleCheck() {
    // await formik.validateForm();
    await formik.handleSubmit();
    console.log("va", formik.isValid);
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
                    "wallsNoInsulation",
                    "wallsLimitedInsulation",
                    "wallsFullyInsulated",
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
                    "wallsBrick",
                    "wallsCavity",
                    "wallsCob",
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
              <div key={i} className="w-full h-full">
                <SelectInput
                  key={i}
                  formik={formik}
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
              <div key={i} className="w-full h-full">
                <SelectInput
                  key={i}
                  formik={formik}
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
          if (i === 10) {
            return (
              <div key={i} className="w-full h-full">
                <SelectInput
                  key={i}
                  formik={formik}
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
          if (i === 11) {
            return (
              <div key={i} className="w-full h-full">
                <SelectInput
                  key={i}
                  formik={formik}
                  item={item}
                  subItems={["floorSolid", "floorSuspended", "floorOtherType"]}
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
          disabled={true}
          // onClick={handleForward}
        >
          forward
        </Button>
      </div>
    </>
  );
}

export default Form5;
