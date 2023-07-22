import React from "react";
import { Outlet, Link } from "react-router-dom";
import FormNav from "../../components/FormNav";
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { getInfo } from "../../api/getInfo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setErr, setLoading, setVar, setInputs } from "../../redux/allInput";
import Form1 from "./allForm/Form1";
import Form3 from "./allForm/Form3";
import Form4 from "./allForm/Form4";
import Form5 from "./allForm/Form5";
import Form2 from "./allForm/Form2";
import { setStep } from "../../redux/forms";
import { useSelector } from "react-redux";
import * as yup from "yup";

const validationSchema = yup.object({
  propertyType: yup.string().required("propertyType is required"),
  builtForm: yup
    .string()
    // .min(8, "Password should be of minimum 8 characters length")
    .required("builtForm is required"),
  flatTopStory: yup.string().required("flatTopStory is required"),
  heatLossCorridor: yup.string(),
  unHeatedCorridorLength: yup.string(),
  extentionCount: yup.string(),
  totalFloorArea: yup.string(),
  floorLevel: yup.string().required("floorLevel is required"),
  floorHeight: yup.string(),
  numberHabitableRooms: yup
    .string()
    .required("numberHabitableRooms is required"),
  numberHeatedRooms: yup.string(),
  numberOpenFireLaces: yup.string(),
  tenure: yup.string(),
  GlazingType: yup.string(),
  WindowsEnergyEFF: yup.string().required("WindowsEnergyEFF is required"),
  WindowsEnvEFF: yup.string(),

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
  portable: yup.bool(),
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

  contorollertype: yup.string(),
  lightningType: yup.string(),
  lightingEnergyEFF: yup.string(),
  lightinEnvEFF: yup.string(),
  lightingCostCourent: yup.string(),
  fixedLightingOutletsCount: yup.string(),
  HotwaterType: yup.string(),
  HotWaterEnergyEFF: yup.string(),
  HotWaterEnvEFF: yup.string(),

  CO2EmissionsCourrent: yup.string(),
  CO2EmissCurrPerFloorArea: yup.string(),
  EnvironmentImpactCurrent: yup.string(),
  EnergyConsumptionCurrent: yup.string(),
  CurentEnergyEfficiency: yup.string(),
  CurentEnergyRating: yup.string(),
  SecondyHeaterType: yup.string(),
  MainFuelType: yup.string(),

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
// FORM LAYOUYT
function Layout() {
  const dispatch = useDispatch();

  const [step, setstep] = React.useState<number>(1);
  const { inputs, isLoading } = useSelector((state: any): any => state.all);

  const mainFormik = useFormik({
    initialValues: {
      propertyType: inputs?.property_setting?.property_type,
      builtForm: inputs?.property_setting?.built_form,
      flatTopStory: inputs?.property_setting?.flat_top_storey,
      heatLossCorridor: inputs?.property_setting?.heat_loss_corridor,
      unHeatedCorridorLength:
        inputs?.property_setting?.unheated_corridor_length,
      extentionCount: inputs?.property_setting?.extension_count,
      totalFloorArea: inputs?.property_setting?.total_floor_area,
      floorLevel: inputs?.property_setting?.floor_level,
      floorHeight: inputs?.property_setting?.floor_height,
      numberHabitableRooms: inputs?.property_setting?.number_habitable_rooms,
      numberHeatedRooms: inputs?.property_setting?.number_heated_rooms,
      numberOpenFireLaces: inputs?.property_setting?.number_open_fireplaces,
      tenure: inputs?.tenure?.type,
      GlazingType: inputs?.windows_setting?.glazing_type,
      WindowsEnergyEFF: inputs?.windows_setting?.windows_energy_eff,
      WindowsEnvEFF: inputs?.windows_setting?.windows_env_eff,

      airSourceHeatPump:
        inputs?.main_Heating_system_setting?.air_source_heatpump,
      waterSourceHeatPump:
        inputs?.main_Heating_system_setting?.water_source_heatpump,
      GroundSourceHeatPump:
        inputs?.main_Heating_system_setting?.ground_source_heatpump,
      Electric: inputs?.main_Heating_system_setting?.electric,
      Gas: inputs?.main_Heating_system_setting?.gas,
      otherUnmetricFuel:
        inputs?.main_Heating_system_setting?.other_unmetric_fuel,
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
      solarWaterHeatingFlag:
        inputs?.main_Heating_system_setting?.solar_water_heating_flag,
      mainHeatEnergyEFF:
        inputs?.main_Heating_system_setting?.main_heat_energy_eff,
      mainHeatEnvEFF: inputs?.main_Heating_system_setting?.mainheat_env_eff,
      mainHeatCEnergyEFF:
        inputs?.main_Heating_system_setting?.mainheatc_energy_eff,
      mainHeatCEnvEFF: inputs?.main_Heating_system_setting?.mainheatc_env_eff,
      heatingCostCourent:
        inputs?.main_Heating_system_setting?.heating_cost_current,
      transactionType: inputs?.transaction_settings?.transaction_type,
      TariffType: inputs?.tariff?.type,

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

      CO2EmissionsCourrent: inputs?.energy_info?.co2_emission_current,
      CO2EmissCurrPerFloorArea:
        inputs?.energy_info?.co2_emiss_curr_per_floor_area,
      EnvironmentImpactCurrent: inputs?.energy_info?.environment_impact_current,
      EnergyConsumptionCurrent: inputs?.energy_info?.energy_consumption_current,
      CurentEnergyEfficiency: inputs?.energy_info?.current_energy_efficiency,
      CurentEnergyRating: inputs?.energy_info?.current_energy_ratting,
      SecondyHeaterType: inputs?.secondary_heater_settings?.type,
      MainFuelType: inputs?.main_fuel_settings?.type,

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
      alert(JSON.stringify(values));
    },
  });

  // useEffect(() => {
  // /firstispatch(setErr(isError));
  //   dispatch(setLoading(isLoading));
  //   dispatch(setInputs(data));
  // }, [data, isLoading, isError]);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-300">
      <main className="border-2 w-[88%] h-[93%] rounded-xl flex flex-col py-2 px-0 bg-slate-200">
        {/* <nav className="bg-slate-500">NAvi</nav> */}

        <FormNav setStep={setstep} />
        {/* <Outlet /> */}
        {/* <Form1/> */}
        {step === 1 ? (
          <Form1 setStep={setstep} mainFormik={mainFormik} />
        ) : step === 2 ? (
          <Form2 setStep={setstep} mainFormik={mainFormik} />
        ) : step === 3 ? (
          <Form3 setStep={setstep} mainFormik={mainFormik}/>
        ) : step === 4 ? (
          <Form4 setStep={setstep} mainFormik={mainFormik}/>
        ) : (
          <Form5 setStep={setstep} mainFormik={mainFormik}/>
        )}
      </main>
    </div>
  );
}
export default Layout;
