import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function CheckBoxInput({ item }: any) {
  return (
    <>
      <FormControlLabel control={<Checkbox />} label={item} />
    </>
  );
}

export default CheckBoxInput;
