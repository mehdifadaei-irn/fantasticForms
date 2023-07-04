import React from "react";
import { TextField } from "@mui/material";

function NormalInput({ formik, item }: any) {
  return (
    <>
      <TextField
        sx={{
          width: "75%",
        }}
        // color="black"
        id={item}
        name={item}
        label={item}
        value={formik.values[item]}
        onChange={formik.handleChange}
        error={formik.touched[item] && Boolean(formik.errors[item])}
        helperText={formik.touched[item] && formik.errors[item]}
      />
    </>
  );
}

export default NormalInput;
