import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, MenuItem } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CheckIcon from "@mui/icons-material/Check";
import ShortcutIcon from "@mui/icons-material/Shortcut";

const data = [
  "propertyType",
  "builtForm",
  "flatTopStory",
  "heatLossCorridor",
  "unHeatedCorridorLength",
  "extentionCount",
  "totalFloorArea",
  "floorLevel",
  "floorHeight",
  "numberHabitableRooms",
  "numberHeatedRooms",
  "numberOpenFireLaces",
];

const validationSchema = yup.object({
  propertyType: yup.string().required("Email is required"),
  builtForm: yup
    .string()
    // .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  flatTopStory: yup.string().required(),
  heatLossCorridor: yup.string().required(),
  unHeatedCorridorLength: yup.string().required(),
  extentionCount: yup.string().required(),
  totalFloorArea: yup.string().required(),
  floorLevel: yup.string().required(),
  floorHeight: yup.string().required(),
  numberHabitableRooms: yup.string().required(),
  numberHeatedRooms: yup.string().required(),
  numberOpenFireLaces: yup.string().required(),
});

function Form1() {
  const formik = useFormik({
    initialValues: {
      propertyType: "house",
      builtForm: "detached",
      flatTopStory: "No222",
      heatLossCorridor: "",
      unHeatedCorridorLength: "",
      extentionCount: "",
      totalFloorArea: "",
      floorLevel: "",
      floorHeight: "",
      numberHabitableRooms: "",
      numberHeatedRooms: "",
      numberOpenFireLaces: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-row flex-wrap h-full w-full justify-center gap-5"
      >
        {data.map((item, i) => {
          const ech = item.toString();
          return (
            <TextField
              key={i}
              select={(i === 0 || i === 1 || i === 2) && true}
              defaultValue={(i === 0 || i === 1 || i === 2) && "hel"}
              // fullWidth
              className="w-50"
              sx={{
                marginTop: 6,
              }}
              id={item}
              name={item}
              label={item}
              //@ts-ignore
              value={formik.values[ech]}
              onChange={formik.handleChange}
              // @ts-ignore
              error={formik.touched[ech] && Boolean(formik.errors[ech])}
              // @ts-ignore
              helperText={formik.touched[ech] && formik.errors[ech]}
            >
              {(i === 0 || i === 1 || i === 2) && (
                <>
                  <MenuItem key={i}>{item}</MenuItem>
                  <MenuItem key={i}>{item}</MenuItem>
                  <MenuItem key={i}>{item}</MenuItem>
                </>
              )}
            </TextField>
          );
        })}
      </form>

      <div className="w-full justify-between flex px-9 mt-5">
        <Button variant="contained" startIcon={<KeyboardReturnIcon />}>
          back
        </Button>
        <Button variant="contained" endIcon={<CheckIcon />}>
          Contained
        </Button>
        <Button variant="contained" endIcon={<ShortcutIcon />}>
          forward
        </Button>
      </div>
    </div>
  );
}

export default Form1;
