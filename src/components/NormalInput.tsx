import { TextField } from "@mui/material";

function NormalInput({ formik, item, unit, topUnit, w }: any) {
  return (
    <div className="r relative flex justify-center">
      <TextField
        sx={{
          // width: "75%",
          width: w,
        }}
        className="xl:w-[75%] w-[85%]"
        id={item}
        name={item}
        label={item}
        value={formik.values[item]}
        onChange={formik.handleChange}
        error={formik.touched[item] && Boolean(formik.errors[item])}
        helperText={formik.touched[item] && formik.errors[item]}
        InputProps={{
          endAdornment: (
            <div
              className={` relative font-bold z-10 ${
                [
                  "heatingCostCourent",
                  "lightingCostCourent",
                  "CO2EmissionsCourrent",
                  "CO2EmissCurrPerFloorArea",
                ].includes(item)
                  ? "translate-x-0"
                  : ""
              }`}
            >
              <span
                className="
            text-zinc-700 font-bold text-[16px] 
          "
              >
                {unit}
              </span>
              <span className="text-[13px] absolute -translate-y-[6px] font-light ">
                {topUnit}
              </span>
            </div>
          ),
        }}
      />
    </div>
  );
}

export default NormalInput;
