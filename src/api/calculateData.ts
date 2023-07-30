import axios from "axios";
import { AllInputs } from "../../type";

const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `epcRate`;

export async function PostDataToCalc(Datas: AllInputs) {
  console.log(Datas.ventilationType);
  const { data, config } = await axios.post(`${apiUrl}/${endpoint}`, {
    controller_settings: { type: Datas.contorollertype },
    energy_info: {
      co2_emiss_curr_per_floor_area: Datas.CO2EmissCurrPerFloorArea,
      co2_emission_current: Datas.CO2EmissionsCourrent,
      current_energy_efficiency: Datas.CurentEnergyEfficiency,
      current_energy_ratting: Datas.CurentEnergyRating,
      energy_consumption_current: Datas.EnergyConsumptionCurrent,
      environment_impact_current: Datas.EnvironmentImpactCurrent,
      lodgement_date: Datas.lodgementDate,
    },
    floor_settings: {
      floor_energy_eff: Datas.FloorEnergyEFf,
      floor_env_eff: Datas.FloorEnvEFF,
      floor_insulation: Datas.FloorInsulation,
      floor_type: Datas.FloorType,
    },
    hot_water_settings: {
      hot_water_energy_eff: Datas.HotWaterEnergyEFF,
      hot_water_env_eff: Datas.HotWaterEnvEFF,
      type: Datas.HotwaterType,
      hotWaterCostCurrent: Datas.hotWaterCostCurrent,
    },
    lightening_settings: {
      fixed_lighting_outlets_count: Datas.fixedLightingOutletsCount,
      lighting_cost_current: Datas.lightingCostCourent,
      lighting_energy_eff: Datas.lightingEnergyEFF,
      lighting_env_eff: Datas.lightinEnvEFF,
      type: Datas.lightningType,
      low_energy_fixed_light_count: Datas.lowEnergyFixedLightCount,
    },
    main_Heating_system_setting: {
      air_source_heatpump: Datas.airSourceHeatPump,
      boiler: Datas.boiler,
      community_scheme: Datas.communityScheme,
      electric: Datas.Electric,
      electric_ceiling: Datas.electricCeiling,
      electric_storage: Datas.electricStorage,
      fan_coil: Datas.fanCoil,
      gas: Datas.Gas,
      ground_source_heatpump: Datas.GroundSourceHeatPump,
      heating_cost_current: Datas.heatingCostCourent,
      main_heat_energy_eff: Datas.mainHeatEnergyEFF,
      mainheat_env_eff: Datas.mainHeatEnvEFF,
      mainheatc_energy_eff: Datas.mainHeatCEnergyEFF,
      mainheatc_env_eff: Datas.mainHeatCEnvEFF,
      micro: Datas.micro,
      other_unknown: Datas.otherUnknown,
      other_unmetric_fuel: Datas.otherUnmetricFuel,
      portable: Datas.portable,
      radiator: Datas.radiator,
      room_heater: Datas.roomHeater,
      solar_water_heating_flag: Datas.solarWaterHeatingFlag,
      underfloor: Datas.underFloor,
      warm_air: Datas.warmAir,
      water_source_heatpump: Datas.waterSourceHeatPump,
    },
    main_fuel_settings: { type: Datas.MainFuelType },
    property_setting: {
      built_form: Datas.builtForm,
      extension_count: Datas.extentionCount,
      flat_top_storey: Datas.flatTopStory,
      floor_height: Datas.floorHeight,
      floor_level: Datas.floorLevel,
      heat_loss_corridor: Datas.heatLossCorridor,
      number_habitable_rooms: Datas.numberHabitableRooms,
      number_heated_rooms: Datas.numberHeatedRooms,
      number_open_fireplaces: Datas.numberOpenFireLaces,
      property_type: Datas.propertyType,
      total_floor_area: Datas.totalFloorArea,
      unheated_corridor_length: Datas.unHeatedCorridorLength,
      construction_age_band_category: Datas.constructionAgeBandCategory,
      flat_storey_count: Datas.flatStoreyCount,
    },
    roof_settings: {
      roof_energy_eff: Datas.RoofEnergyEFF,
      roof_env_eff: Datas.RoofEnvEFF,
      roof_insulation: Datas.RoofInsulation,
      roof_loft_insulation_thickness: Datas.RoofLoftInsulationThickness,
      roof_thermal_transmittance: Datas.RoofThermalTransmittance,
      roof_type: Datas.RoofType,
      photo_supply: Datas.photoSupply,
    },
    secondary_heater_settings: { type: Datas.SecondyHeaterType },
    tenure: { type: Datas.tenure },
    transaction_settings: { transaction_type: Datas.transactionType },
    wall_settings: {
      wall_insulation: Datas.wallInsullation,
      wall_type: Datas.wallType,
      walls_energy_eff: Datas.WallsEnergyEFF,
      walls_env_eff: Datas.WallsEnvEFF,
    },
    windows_setting: {
      glazing_type: Datas.GlazingType,
      windows_energy_eff: Datas.WindowsEnergyEFF,
      windows_env_eff: Datas.WindowsEnvEFF,
      multi_glaze_proportion: Datas.multiGlazeProportion,
    },
    tariff: {
      type: Datas.TariffType,
    },
    ventilation: {
      type: Datas.ventilationType,
    },
  });
  // console.log(config);

  return data;
}
