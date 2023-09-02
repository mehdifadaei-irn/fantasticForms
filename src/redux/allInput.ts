import { createSlice } from "@reduxjs/toolkit";
import type { AllInputs } from "../../type";

interface props {
  values: AllInputs;
  isLoading: boolean;
  isError: boolean;
  inputs: any;
  contorollertype: any;
}

const initialState: props = {
  //@ts-ignore
  values: {
    propertyType: "",
    builtForm: "",
    flatTopStory: "",
    heatLossCorridor: "",
    unHeatedCorridorLength: "",
    extentionCount: "",
    totalFloorArea: "",
    floorLevel: "",
    floorHeight: "",
    numberHabitableRooms: "",
    numberHeatedRooms: "",
    numberOpenFireLaces: "",
    type: "",
    GlazingType: "",
    WindowsEnergyEFF: "",
    WindowsEnvEFF: "",

    airSourceHeatPump: false,
    waterSourceHeatPump: false,
    GroundSourceHeatPump: false,
    Electric: false,
    Gas: false,
    otherUnmetricFuel: false,
    fanCoil: false,
    underFloor: false,
    radiator: false,
    warmAir: false,
    boiler: false,
    electricCeiling: false,
    electricStorage: false,
    communityScheme: false,
    micro: false,
    roomHeater: false,
    otherUnknown: false,
    solarWaterHeatingFlag: "",
    mainHeatEnergyEFF: "",
    mainHeatEnvEFF: "",
    mainHeatCEnergyEFF: "",
    mainHeatCEnvEFF: "",
    heatingCostCourent: "",
    transactionType: "",
    TariffType: "",

    contorollertype: "",
    lightningType: "",
    lightingEnergyEFF: "",
    lightinEnvEFF: "",
    lightingCostCourent: "",
    fixedLightingOutletsCount: "",
    HotwaterType: "",
    HotWaterEnergyEFF: "",
    HotWaterEnvEFF: "",

    CO2EmissionsCourrent: "",
    CO2EmissCurrPerFloorArea: "",
    EnvironmentImpactCurrent: "",
    EnergyConsumptionCurrent: "",
    CurrentEnergyEfficiency: "",
    CurrentEnergyRating: "",
    SecondyHeaterType: "",
    MainFuelType: "",
    // HotWaterEnvEFF: "";

    wallInsullation: "",
    wallType: "",
    WallsEnergyEFF: "",
    WallsEnvEFF: "",
    RoofInsulation: "",
    RoofType: "",
    RoofEnergyEFF: "",
    RoofEnvEFF: "",
    RoofLoftInsulationThickness: "",
    RoofThermalTransmittance: "",
    FloorInsulation: "",
    FloorType: "",
    // FloorEnergyEFf: "",
    // FloorEnvEFF: "",
  },
  isError: false,
  isLoading: false,
  inputs: {},
  contorollertype: [],
};

const allInputs = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setVar(state, action) {
      //@ts-ignore
      state.values[`${action.payload.key}`] = action.payload.value;
    },
    setErr(state, action) {
      state.isError = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setInputs(state, action) {
      state.inputs = action.payload;
    },
    setContoroller(state, action) {
      state.contorollertype = action.payload;
    },
  },
});

export const { setVar, setErr, setLoading, setInputs, setContoroller } =
  allInputs.actions;
export default allInputs.reducer;
