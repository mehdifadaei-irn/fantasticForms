import { TextField, MenuItem } from "@mui/material";

function SelectInput({ item, formik, subItems, unit, w }: any) {
  return (
    <>
      <TextField
        select
        sx={{
          width: w,
        }}
        className="xl:w-[75%] w-[85%]"
        id={item}
        name={item}
        label={item}
        //   type="password"
        value={formik.values[item]}
        onChange={formik.handleChange}
        error={formik.touched[item] && Boolean(formik.errors[item])}
        helperText={formik.touched[item] && formik.errors[item]}
      >
        {subItems.map((subItem: string) => (
          <MenuItem key={subItem} value={subItem}>
            {subItem}
          </MenuItem>
        ))}
      </TextField>
      {/* <p>ge</p> */}
    </>
  );
}

export default SelectInput;
