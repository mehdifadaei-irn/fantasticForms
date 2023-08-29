export type AllInputs = {
  propertyType: "house" | "flat" | "maisonette" | "bungalow" | "parkHome" | "";
  builtForm:
    | "detached"
    | "semiDetached"
    | "midTerrace"
    | "end-Terrace"
    | "enclosed Mid-Terrace"
    | "enclosed End-Terrace"
    | "";
  flatTopStory: "Yes" | "No" | "";
  heatLossCorridor: string;
  unHeatedCorridorLength: string;
  extentionCount: string;
  totalFloorArea: string;
  floorLevel: string;
  floorHeight: string;
  numberHabitableRooms: string;
  numberHeatedRooms: string;
  numberOpenFireLaces: string;
  type: string;
  GlazingType: string;
  WindowsEnergyEFF: string;
  WindowsEnvEFF: string;

  airSourceHeatPump: boolean;
  waterSourceHeatPump: boolean;
  GroundSourceHeatPump: boolean;
  Electric: boolean;
  Gas: boolean;
  otherUnmetricFuel: boolean;
  fanCoil: boolean;
  underFloor: boolean;
  radiator: boolean;
  warmAir: boolean;
  boiler: boolean;
  electricCeiling: boolean;
  electricStorage: boolean;
  communityScheme: boolean;
  micro: boolean;
  roomHeater: boolean;
  otherUnknown: boolean;
  portable: boolean;
  solarWaterHeatingFlag: string;
  mainHeatEnergyEFF: string;
  mainHeatEnvEFF: string;
  mainHeatCEnergyEFF: string;
  mainHeatCEnvEFF: string;
  heatingCostCourent: string;
  transactionType:
    | "transEco"
    | "transGreenDeal"
    | "transSale"
    | "transNewDwelling"
    | "transRental"
    | "transRhi"
    | "transUnknown"
    | "";
  TariffType:
    | "tariff24HrsOrDualOrBoth"
    | "tariffOffPeak"
    | "tariffSingle"
    | "tariffStandard"
    | "tariffUnknown"
    | "";

  contorollertype: any;
  // | "mainHeatingControlTTZC"
  // | "mainHeatingControlTrv"
  // | "mainHeatingControlApplianceThermostate"
  // | "mainHeatingContorlAcc"
  // | "mainHeatingControlCelect"
  // | "mainHeatingControlFlatRate"
  // | "mainHeatingControlProgrammer"
  // | "mainHeatingControlCommunityScheme"
  // | "mainHeatingControlRoomThermostrate"
  // | "mainHeatingControlBoilerEnergyManager"
  // | "mainHeating"
  // | "";
  lightningType:
    | "lightingLowEnergy"
    | "lightingNoLowEnergy"
    | "lightingOtherUnknown"
    | "lowEnergyLightingProportion"
    | "";
  lightingEnergyEFF: string;
  lightinEnvEFF: string;
  lightingCostCourent: string;
  fixedLightingOutletsCount: string;
  HotwaterType:
    | "hotWaterCommunity"
    | "hotWaterHeatPump"
    | "hotWaterImmersion"
    | "hotWaterInstantaneous"
    | "hotWaterFromMainSystem"
    | "hotWaterSecondarySystem"
    | "hotWaterGasBoiler"
    | "hotWaterOtherSystem"
    | "hotWaterUnknownSystem"
    | "";
  HotWaterEnergyEFF: string;
  HotWaterEnvEFF: string;
  hotWaterCostCurrent: string;

  CO2EmissionsCourrent: string;
  CO2EmissCurrPerFloorArea: string;
  EnvironmentImpactCurrent: string;
  EnergyConsumptionCurrent: string;
  CurrentEnergyEfficiency: string;
  CurrentEnergyRating: string;
  SecondyHeaterType:
    | "secondHeatElectric"
    | "secondHeatingUnderFloor"
    | "secondHeatingRoomHeater"
    | "secondHeatingSecondrySystem"
    | "secondHeatingPortableElectric"
    | "secondHeatingUnknown"
    | "";
  MainFuelType:
    | "mainFuelElectricity"
    | "mainFuelGas"
    | "mainFuelcommunityScheme"
    | "mainFuelOtherUnknown"
    | "";
  // HotWaterEnvEFF: "";

  wallInsullation:
    | "wallsNoInsulation"
    | "wallsLimitedInsulation"
    | "wallsFullyInsulated"
    | "";
  wallType:
    | "wallsBrick"
    | "wallsCavity"
    | "wallsCob"
    | "wallsParkHome"
    | "wallsSedimentary"
    | "wallsSystemBuildt"
    | "wallsTimber"
    | "wallsOterUnknown"
    // | "wallsTermalTransmitance"
    | "";
  WallsEnergyEFF: string;
  WallsEnvEFF: string;
  RoofInsulation:
    | "roofFullyInsulated"
    | "roofLimitedInsulated"
    | "roofNoInsulation"
    | "";
  RoofType:
    | "roofFlatNearHorizontalRoof"
    | "roofPitched"
    | "roofRoom"
    | "roofOtherUnknown"
    | "";
  RoofEnergyEFF: string;
  RoofEnvEFF: string;
  RoofLoftInsulationThickness: string;
  RoofThermalTransmittance: string?;
  FloorInsulation:
    | "floorNoInsulation"
    | "floorLimitedInsulation"
    | "floorFullyInsulated"
    | "floorDwelingBelow"
    | "";
  FloorType: "floorSolid" | "floorSuspended" | "floorOtherType" | "";
  // FloorEnergyEFf: string;
  // FloorEnvEFF: string;

  flatStoreyCount: string;
  constructionAgeBandCategory: string;
  lodgementDate: string;
  multiGlazeProportion: string;
  photoSupply: string;
  lowEnergyFixedLightCount: string;
  ventilationType:
    | "mechanicalVentilationNatural"
    | "mechanicalVentilationMechanicalExtract"
    | "mechanicalVentilationMechanicalSupplyExtract"
    | "mechanicalVentilationMechanicalUnknown";
  tenure: string;
};

interface OptTableType {
  "1": optsubTable[];
  "2": optsubTable[];
  "3": optsubTable[];
  "4": optsubTable[];
  "5": optsubTable[];
  "6": optsubTable[];
  "7": optsubTable[];
  current_energy_lable: "1" | "2" | "3" | "4" | "5" | "6" | "7";
}

interface optsubTable {
  walls: any;
  windows: any;
  roofs: any;
  lightning_energy_eff: any;
  lightning_cost: any;
  lightning: any;
  hot_water_energy_eff: any;
  controller_energy_eff: any;
  heating_system_energy_eff: any;
  hot_water_cost: any;
  totalPrice: string;
}
