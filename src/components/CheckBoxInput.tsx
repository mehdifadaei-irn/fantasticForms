import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function CheckBoxInput({ item, formik }: any) {
  return (
    <>
      <FormControlLabel
        control={<Checkbox />}
        name={item}
        id={item}
        label={item}
        value={formik.values[item]}
        onChange={formik.handleChange}
        // error={formik.touched[item] && Boolean(formik.errors[item])}
        // helperText={formik.touched[item] && formik.errors[item]}
      />
    </>
  );
}

export default CheckBoxInput;
