import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 450,
    },
  },
};

type MultiSelectProps = {
  formik: any;
  item: string;
  subItems: string[];
  w?: string;
};

function MultiSelect({ formik, item, w, subItems }: MultiSelectProps) {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const { contorollertype } = useSelector((state: any): any => state.all);

  //   const initarr = contorollertype;

  React.useEffect(() => {
    setPersonName(contorollertype);
  }, []);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  console.log(personName);

  return (
    <>
      <FormControl sx={{ m: 1, width: w }} className="xl:w-[75%] w-[85%]">
        <InputLabel id="demo-multiple-checkbox-label">{item}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id={item}
          name={item}
          label={item}
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id={item} name={item} label={item} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {subItems.map((name) => {
            console.log(personName.includes(name));
            return (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.includes(name) ? true : false} />
                <ListItemText primary={name} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default MultiSelect;
