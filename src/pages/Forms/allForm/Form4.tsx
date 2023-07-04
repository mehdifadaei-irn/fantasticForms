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
import { increment, decrement } from "../../../redux/forms";
import { useNavigate, useParams } from "react-router-dom";

const data = [
  "CO2EmissionsCourrent",
  "CO2EmissCurrPerFloorArea",
  "EnvironmentImpactCurrent",
  "EnergyConsumptionCurrent",
  "CurentEnergyEfficiency",
  "CurentEnergyRating",
  "SecondyHeaterType",
  "MainFuelType",
  "HotWaterEnvEFF",
];

const validationSchema = yup.object({
  CO2EmissionsCourrent: yup.string(),
  CO2EmissCurrPerFloorArea: yup.string(),
  EnvironmentImpactCurrent: yup.string(),
  EnergyConsumptionCurrent: yup.string(),
  CurentEnergyEfficiency: yup.string(),
  CurentEnergyRating: yup.string(),
  SecondyHeaterType: yup.string(),
  MainFuelType: yup.string(),
  HotWaterEnvEFF: yup.string(),
});

function Form4() {
  const navigate = useNavigate();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      CO2EmissionsCourrent: "",
      CO2EmissCurrPerFloorArea: "",
      EnvironmentImpactCurrent: "",
      EnergyConsumptionCurrent: "",
      CurentEnergyEfficiency: "",
      CurentEnergyRating: "",
      SecondyHeaterType: "",
      MainFuelType: "",
      HotWaterEnvEFF: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const { step } = useSelector((state: any): any => state.counter);
  const dispatch = useDispatch();

  function handleForward() {
    dispatch(increment());
    console.log(params);
    // formik.handleSubmit()
    navigate(`/${params.address}/form5`, { replace: true });
  }

  function handleBackWard() {
    dispatch(decrement());
    navigate(`/${params.address}/form3`, { replace: true });
  }
  async function handleCheck() {
    // await formik.validateForm();
    await formik.handleSubmit();
    console.log("va", formik.isValid);
  }

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full h-[76%] justify-center xl:gap-5 gap-0 py-3 grid grid-rows-4 xl:grid-rows-3 xl:grid-cols-4 grid-cols-3 xl:px-9 px-3 items-center justify-items-center"
      >
        {data.map((item, i) => {
          if (i === 7) {
            return (
              <div key={i} className="w-full h-full">
                <SelectInput
                  key={i}
                  formik={formik}
                  item={item}
                  subItems={[
                    "secondHeatElectric",
                    "secondHeatingUnderFloor",
                    "secondHeatingRoomHeater",
                    "secondHeatingSecondrySystem",
                    "secondHeatingPortableElectric",
                    "secondHeatingUnknown",
                  ]}
                />
              </div>
            );
          }
          if (i === 8) {
            return (
              <div key={i} className="w-full h-full">
                <SelectInput
                  key={i}
                  formik={formik}
                  item={item}
                  subItems={[
                    "mainFuelElectricity",
                    "mainFuelGas",
                    "mainFuelcommunityScheme",
                    "mainFuelOtherUnknown",
                  ]}
                />
              </div>
            );
          } else {
            return (
              <div key={i} className="w-full h-full">
                <NormalInput formik={formik} item={item} key={i} />
              </div>
            );
          }
        })}
      </form>

      <div className="w-full justify-between flex px-9 mt-3 mb-3">
        <Button
          variant="contained"
          startIcon={<KeyboardReturnIcon />}
          onClick={handleBackWard}
          // disabled={true}
        >
          back
        </Button>
        <Button variant="contained" onClick={handleCheck} endIcon={<CheckIcon />}>
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

export default Form4;