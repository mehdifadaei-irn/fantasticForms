import React from "react";
import { DateField } from "@mui/x-date-pickers/DateField";
import dayjs, { Dayjs } from "dayjs";

const DateInput = ({ formik, item, unit, topUnit, w }: any) => {
 
  //   const dateString: string = formik.values[item].toString();
  return (
    <div className=" flex justify-center" id={item}>
      {/* {typeof formik.values[item]} */}
      <DateField
        sx={{
          // width: "75%",
          width: w,
        }}
        className="xl:w-[100%] w-[85%]"
        label={item}
        // value={formik.values[item]}
        value={dayjs(formik?.values[item])}
        onChange={formik.handleChange}
        // helperText={formik.touched[item] && formik.errors[item]}
      />
    </div>
  );
};

export default DateInput;
