import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

function NormalInput({ formik, item, unit, topUnit, w, startUnit }: any) {
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
          startAdornment: (
            <InputAdornment position="start">{startUnit}</InputAdornment>
          ),
          endAdornment: (
            //@ts-ignore
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
