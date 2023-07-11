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
import CheckBoxInput from "../../../components/CheckBoxInput";

const data = [
  "airSourceHeatPump",
  "waterSourceHeatPump",
  "GroundSourceHeatPump",
  "Electric",
  "Gas",
  "otherUnmetricFuel",
  "fanCoil",
  "underFloor",
  "radiator",
  "warmAir",
  "boiler",
  "electricCeiling",
  "electricStorage",
  "communityScheme",
  "micro",
  "roomHeater",
  "otherUnknown",
  "solarWaterHeatingFlag",
  "mainHeatEnergyEFF",
  "mainHeatEnvEFF",
  "mainHeatCEnergyEFF",
  "mainHeatCEnvEFF",
  "heatingCostCourent",
  "transactionType",
  "TariffType",
];

const validationSchema = yup.object({
  airSourceHeatPump: yup.bool(),
  waterSourceHeatPump: yup.bool(),
  GroundSourceHeatPump: yup.bool(),
  Electric: yup.bool(),
  Gas: yup.bool(),
  otherUnmetricFuel: yup.bool(),
  fanCoil: yup.bool(),
  underFloor: yup.bool(),
  radiator: yup.bool(),
  warmAir: yup.bool(),
  boiler: yup.bool(),
  electricCeiling: yup.bool(),
  electricStorage: yup.bool(),
  communityScheme: yup.bool(),
  micro: yup.bool(),
  roomHeater: yup.bool(),
  otherUnknown: yup.bool(),
  solarWaterHeatingFlag: yup.string(),
  mainHeatEnergyEFF: yup.string(),
  mainHeatEnvEFF: yup.string(),
  mainHeatCEnergyEFF: yup.string(),
  mainHeatCEnvEFF: yup.string(),
  heatingCostCourent: yup.string(),
  transactionType: yup.string(),
  TariffType: yup.string(),
});

function Form2() {
  const navigate = useNavigate();
  const params = useParams();
  const { inputs } = useSelector((state: any): any => state.all);

  const formik = useFormik({
    initialValues: {
      airSourceHeatPump: inputs?.main_Heating_system_setting?.air_source_heatpump,
      waterSourceHeatPump: inputs?.main_Heating_system_setting?.water_source_heatpump,
      GroundSourceHeatPump: inputs?.main_Heating_system_setting?.ground_source_heatpump,
      Electric: inputs?.main_Heating_system_setting?.electric,
      Gas: inputs?.main_Heating_system_setting?.gas,
      otherUnmetricFuel: inputs?.main_Heating_system_setting?.other_unmetric_fuel,
      fanCoil: inputs?.main_Heating_system_setting?.fan_coil,
      underFloor: inputs?.main_Heating_system_setting?.underfloor,
      radiator: inputs?.main_Heating_system_setting?.radiator,
      warmAir: inputs?.main_Heating_system_setting?.warm_air,
      boiler: inputs?.main_Heating_system_setting?.boiler,
      electricCeiling: inputs?.main_Heating_system_setting?.electric_ceiling,
      electricStorage: inputs?.main_Heating_system_setting?.electric_storage,
      communityScheme: inputs?.main_Heating_system_setting?.community_scheme,
      micro: inputs?.main_Heating_system_setting?.micro,
      roomHeater: inputs?.main_Heating_system_setting?.room_heater,
      otherUnknown: inputs?.main_Heating_system_setting?.other_unknown,
      solarWaterHeatingFlag: inputs?.main_Heating_system_setting?.solar_water_heating_flag,
      mainHeatEnergyEFF: inputs?.main_Heating_system_setting?.main_heat_energy_eff,
      mainHeatEnvEFF: inputs?.main_Heating_system_setting?.mainheat_env_eff,
      mainHeatCEnergyEFF: inputs?.main_Heating_system_setting?.mainheatc_energy_eff,
      mainHeatCEnvEFF: inputs?.main_Heating_system_setting?.mainheatc_env_eff,
      heatingCostCourent: inputs?.main_Heating_system_setting?.heating_cost_current,
      transactionType: inputs?.transaction_settings?.transaction_type,
      TariffType: inputs?.tariff?.type,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const dispatch = useDispatch();

  function handleForward() {
    dispatch(increment());
    // console.log(params);
    // formik.handleSubmit()
    navigate(`/${params.address}/form3`, { replace: true });
  }

  function handleBackWard() {
    dispatch(decrement());
    navigate(`/${params.address}/form1`, { replace: true });
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
        className="w-full h-[76%] flex items-center justify-items-center flex-row"
      >
        <div className="gird grid-cols-2 w-[45%] grid gap-x-10 ml-8  ">
          {data.map((item, i) => {
            if (
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
              ].includes(i)
            ) {
              return (
                <div key={item}>
                  <CheckBoxInput item={item} formik={formik} />
                </div>
              );
            }
          })}
        </div>

        <div className="flex-1 grid gri grid-cols-2 grid-rows-4 gap-y-9 justify-items-end">
          {data.map((item, i) => {
            if ([17, 18, 19, 20, 21, 22].includes(i)) {
              return <NormalInput formik={formik} item={item} key={item} />;
            }
            if (i === 23) {
              return (
                <SelectInput
                  formik={formik}
                  item={item}
                  key={item}
                  subItems={[
                    "transEco",
                    "transGreenDeal",
                    "transSale",
                    "transNewDwelling",
                    "transRental",
                    "transRhi",
                    "transUnknown",
                  ]}
                />
              );
            }
            if (i === 24) {
              return (
                <SelectInput
                  formik={formik}
                  item={item}
                  key={item}
                  subItems={[
                    "tariff24HrsOrDualOrBoth",
                    "tariffOffPeak",
                    "tariffSingle",
                    "tariffStandard",
                    "tariffUnknown",
                  ]}
                />
              );
            }
          })}
        </div>
      </form>

      <div className="w-full justify-between flex px-9 mt-3 mb-3">
        <Button
          variant="contained"
          startIcon={<KeyboardReturnIcon />}
          // disabled={true}
          onClick={handleBackWard}
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

export default Form2;
