export const BoolArray = [
  "TRANS_ECO",
  "TRANS_GREEN_DEAL",
  "TRANS_SALE",
  "TRANS_NEW_DWELLING",
  "TRANS_RENTAL",
  "TRANS_RHI",
  "TRANS_UNKNOWN",
  "TARIFF_24HRS_OR_DUAL_OR_BOTH",
  "TARIFF_OFF_PEAK",
  "TARIFF_SINGLE",
  "TARIFF_STANDARD",
  "TARIFF_UNKNOWN",
  "GLAZED_TYPE_SINGLE",
  "GLAZED_TYPE_DOUBLE",
  "GLAZED_TYPE_TRIPLE",
  "GLAZED_TYPE_UNKNOWN",
  "HOTWATER_COMMUNITY",
  "HOTWATER_HEATPUMP",
  "HOTWATER_IMMERSION",
  "HOTWATER_INSTANTANEOUS",
  "HOTWATER_FROM_MAIN_SYSTEM",
  "HOTWATER_SECONDARY_SYSTEM",
  "HOTWATER_GAS_BOILER",
  "HOTWATER_OTHER_SYSTEM",
  "HOTWATER_UNKNOWN_SYSTEM",
  "FLOOR_NO_INSULATION",
  "FLOOR_LIMITED_INSULATION",
  "FLOOR_FULLY_INSULATED",
  "FLOOR_DWELLING_BELOW",
  "FLOOR_SOLID",
  "FLOOR_SUSPENDED",
  "FLOOR_OTHER_TYPE",
  "WINDOWS_SINGLE_GLAZED",
  "WINDOWS_SECONDARY_GLAZED",
  "WINDOWS_DOUBLE_GLAZED",
  "WINDOWS_TRIPLE_GLAZED",
  "WINDOWS_HIGH_PERFORMANCE_GLAZED",
  "WINDOWS_MULTIPLE_GLAZED",
  "WINDOWS_MIXED_GLAZED",
  "WINDOWS_OTHER_UNKNOWN_GLAZED",
  "WALLS_NO_INSULATION",
  "WALLS_LIMITED_INSULATION",
  "WALLS_FULLY_INSULATED",
  "WALLS_BRICK",
  "WALLS_CAVITY",
  "WALLS_COB",
  "WALLS_GRANITE",
  "WALLS_PARK_HOME",
  "WALLS_SEDIMENTARY",
  "WALLS_SYSTEM_BUILT",
  "WALLS_TIMBER",
  "WALLS_OTHER_UNKNOWN",
  "SECOND_HEATING_ELECTRIC",
  "SECOND_HEATING_UNDERFLOOR",
  "SECOND_HEATING_ROOM_HEATER",
  "SECOND_HEATING_SECONDARY_SYSTEM",
  "SECOND_HEATING_PORTABLE_ELECTRIC",
  "SECOND_HEATING_UNKNOWN",
  "ROOF_FLAT_NEAR_HORIZONTAL_ROOF",
  "ROOF_FULLY_INSULATED",
  "ROOF_LIMITED_INSULATION",
  "ROOF_NO_INSULATION",
  "ROOF_PITCHED",
  "ROOF_ROOM",
  "ROOF_OTHER_UNKNOWN",
  "AIR_SOURCE_HEATPUMP",
  "WATER_SOURCE_HEATPUMP",
  "GROUND_SOURCE_HEATPUMP",
  "ELECTRIC",
  "GAS",
  "OTHER_UNMETRIC_FUEL",
  "FAN_COIL",
  "SYSTEM_UNDERFLOOR",
  "RADIATOR",
  "SYSTEM_WARM_AIR",
  "BOILER",
  "ELECTRIC_CEILING",
  "ELECTRIC_STORAGE",
  "COMMUNITY_SCHEME",
  "MICRO",
  "PORTABLE",
  "ROOM_HEATER",
  "OTHER_UNKNOWN",
  "TTZC",
  "TRV",
  "APPLIANCE_THERMOSTATE",
  "ACC",
  "CELECT",
  "FLAT_RATE",
  "PROGRAMMER",
  "COMMUNITY_SCHEME",
  "ROOM_THERMOSTATE",
  "BOILER_ENERGY_MANAGER",
  "BY_PASS",
  "FLOW_SWITCH",
  "NO_THERMOSTATE",
  "OTHER_UNKNOWN",
  "LIGHTING_LOW_ENERGY",
  "LIGHTING_NO_LOW_ENERGY",
  "LITHING_OTHER_UNKNOWN",
  "MAIN_FUEL_ELECTRICITY",
  "MAIN_FUEL_GAS",
  "MAIN_FUEL_COMMUNITY_SCHEME",
  "MAIN_FUEL_OTHER_UNKNOWN",
  "TENURE_OWNER_OCCUPIED",
  "TENURE_PRIVATE_RENT",
  "TENURE_SOCIAL_RENT",
  "TENURE_UNKNOWN",
  "MECHANICAL_VENTILATION_NATURAL",
  "MECHANICAL_VENTILATION_MECHANICAL_EXTRACT",
  "MECHANICAL_VENTILATION_MECHANICAL_SUPPLY_EXTRACT",
  "MECHANICAL_VENTILATION_MECHANICAL_UNKNOWN",
];

export function valToCAN(name: string, value: string) {
  //TENURE_UNKNOWN
  if (BoolArray.includes(name.toLocaleUpperCase())) {
    if (value === "1") {
      return "YES";
    } else if (value === "0") return "NO";
  } else {
    return value;
  }
}
