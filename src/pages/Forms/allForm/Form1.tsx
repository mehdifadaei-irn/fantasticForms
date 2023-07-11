import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CheckIcon from "@mui/icons-material/Check";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import NormalInput from "../../../components/NormalInput";
import SelectInput from "../../../components/SelectInput";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../../redux/forms";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

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
  "Type",
  "GlazingType",
  "WindowsEnergyEFF",
  "WindowsEnvEFF",
];

const validationSchema = yup.object({
  propertyType: yup.string().required("propertyType is required"),
  builtForm: yup
    .string()
    // .min(8, "Password should be of minimum 8 characters length")
    .required("builtForm is required"),
  flatTopStory: yup.string().required("flatTopStory is required"),
  heatLossCorridor: yup.string(),
  unHeatedCorridorLength: yup.string(),
  extentionCount: yup.string(),
  totalFloorArea: yup.string(),
  floorLevel: yup.string().required("floorLevel is required"),
  floorHeight: yup.string(),
  numberHabitableRooms: yup
    .string()
    .required("numberHabitableRooms is required"),
  numberHeatedRooms: yup.string(),
  numberOpenFireLaces: yup.string(),
  type: yup.string(),
  GlazingType: yup.string(),
  WindowsEnergyEFF: yup.string().required("WindowsEnergyEFF is required"),
  WindowsEnvEFF: yup.string(),
});

function Form1() {
  const navigate = useNavigate();
  const params = useParams();

  const { inputs, isLoading } = useSelector((state: any): any => state.all);
  // inputs["property_setting"]["property_type"] ||
  // inputs["property_setting"]["heat_loss_corridor"] ||
  const formik = useFormik({
    initialValues: {
      propertyType: inputs?.property_setting?.property_type,
      builtForm: inputs?.property_setting?.built_form,
      flatTopStory: inputs?.property_setting?.flat_top_storey,
      heatLossCorridor: inputs?.property_setting?.heat_loss_corridor,
      unHeatedCorridorLength:
        inputs?.property_setting?.unheated_corridor_length,
      extentionCount: inputs?.property_setting?.extension_count,
      totalFloorArea: inputs?.property_setting?.total_floor_area,
      floorLevel: inputs?.property_setting?.floor_level,
      floorHeight: inputs?.property_setting?.floor_height,
      numberHabitableRooms: inputs?.property_setting?.number_habitable_rooms,
      numberHeatedRooms: inputs?.property_setting?.number_heated_rooms,
      numberOpenFireLaces: inputs?.property_setting?.number_open_fireplaces,
      type: inputs?.tenure?.type,
      GlazingType: inputs?.windows_setting?.glazing_type,
      WindowsEnergyEFF: inputs?.windows_setting?.windows_energy_eff,
      WindowsEnvEFF: inputs?.windows_setting?.windows_env_eff,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  // const { step } = useSelector((state: any): any => state.counter);
  const dispatch = useDispatch();

  function handleForward() {
    dispatch(increment());
    console.log(params);
    // formik.handleSubmit()
    navigate(`/${params.address}/form2`, { replace: true });
  }

  React.useEffect(() => {
    formik.values.propertyType =
      inputs?.property_setting?.property_type.toString();
  }, []);

  async function handleCheck() {
    // await formik.validateForm();
    // await formik.handleSubmit();
    console.log(isLoading, "Load");
    console.log(inputs?.property_setting?.property_type, "si");
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{params.address}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {isLoading ? (
        <div className="w-full h-[76%] justify-center xl:gap-5 gap-0 py-3 grid grid-rows-4 xl:grid-rows-3 xl:grid-cols-4 grid-cols-3 xl:px-9 px-3 items-center justify-items-center">
          {[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
            <div key={i}>
              <Skeleton variant="rounded" width={200} height={60} />
            </div>
          ))}
        </div>
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          className="w-full h-[76%] justify-center xl:gap-5 gap-0 py-3 grid grid-rows-4 xl:grid-rows-3 xl:grid-cols-4 grid-cols-3 xl:px-9 px-3 items-center justify-items-center"
        >
          {data.map((item, i) => {
            if (i === 0) {
              return (
                <div key={i} className="w-full h-full">
                  <SelectInput
                    key={i}
                    formik={formik}
                    item={item}
                    subItems={[
                      "house",
                      "flat",
                      "maisonette",
                      "bungalow",
                      "park home",
                    ]}
                  />
                </div>
              );
            }
            if (i === 1) {
              return (
                <div key={i} className="w-full h-full">
                  <SelectInput
                    key={i}
                    formik={formik}
                    item={item}
                    subItems={[
                      "detached",
                      "semi-Detached",
                      "midTerrace",
                      "end-Terrace",
                      "enclosed Mid-Terrace",
                      "enclosed End-Terrace",
                    ]}
                  />
                </div>
              );
            }
            if (i === 2) {
              return (
                <div key={i} className="w-full h-full">
                  <SelectInput
                    key={i}
                    formik={formik}
                    item={item}
                    subItems={["Yes", "No"]}
                  />
                </div>
              );
            } else {
              return (
                <div key={i} className="w-full h-full">
                  <NormalInput formik={formik} item={item} />
                </div>
              );
            }
          })}
        </form>
      )}

      <div className="w-full justify-between flex px-9 mt-3 mb-3">
        <Button
          variant="contained"
          startIcon={<KeyboardReturnIcon />}
          disabled={true}
        >
          back
        </Button>
        <Button
          variant="contained"
          type={"button"}
          endIcon={<CheckIcon />}
          onClick={handleCheck}
        >
          Check
        </Button>
        <Button
          variant="contained"
          endIcon={<ShortcutIcon />}
          onClick={handleForward}
        >
          forward
        </Button>
      </div>
    </>
  );
}

export default Form1;
