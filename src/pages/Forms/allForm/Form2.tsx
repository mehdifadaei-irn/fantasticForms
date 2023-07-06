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
import CheckBoxInput from "../../../components/CheckBoxInput";

const data = [
  "airSourceHeatPump",
  "waterSourceHeatPump",
  "GroundSourceHeatPump",
  "Electric",
  "Gas",
  "otherUnmetricFuel",
  "fanCoil",
  "underFloor",
  "radiator",
  "warmAir",
  "boiler",
  "electricCeiling",
  "electricStorage",
  "communityScheme",
  "micro",
  "roomHeater",
  "otherUnknown",
  "solarWaterHeatingFlag",
  "mainHeatEnergyEFF",
  "mainHeatEnvEFF",
  "mainHeatCEnergyEFF",
  "mainHeatCEnvEFF",
  "heatingCostCourent",
  "transactionType",
  "TariffType",
];

const validationSchema = yup.object({
  airSourceHeatPump: yup.bool(),
  waterSourceHeatPump: yup.bool(),
  GroundSourceHeatPump: yup.bool(),
  Electric: yup.bool(),
  Gas: yup.bool(),
  otherUnmetricFuel: yup.bool(),
  fanCoil: yup.bool(),
  underFloor: yup.bool(),
  radiator: yup.bool(),
  warmAir: yup.bool(),
  boiler: yup.bool(),
  electricCeiling: yup.bool(),
  electricStorage: yup.bool(),
  communityScheme: yup.bool(),
  micro: yup.bool(),
  roomHeater: yup.bool(),
  otherUnknown: yup.bool(),
  solarWaterHeatingFlag: yup.string(),
  mainHeatEnergyEFF: yup.string(),
  mainHeatEnvEFF: yup.string(),
  mainHeatCEnergyEFF: yup.string(),
  mainHeatCEnvEFF: yup.string(),
  heatingCostCourent: yup.string(),
  transactionType: yup.string(),
  TariffType: yup.string(),
});

function Form2() {
  const navigate = useNavigate();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      airSourceHeatPump: "",
      waterSourceHeatPump: "",
      GroundSourceHeatPump: "",
      Electric: "",
      Gas: "",
      otherUnmetricFuel: "",
      fanCoil: "",
      underFloor: "",
      radiator: "",
      warmAir: "",
      boiler: "",
      electricCeiling: "",
      electricStorage: "",
      communityScheme: "",
      micro: "",
      roomHeater: "",
      otherUnknown: "",
      solarWaterHeatingFlag: "",
      mainHeatEnergyEFF: "",
      mainHeatEnvEFF: "",
      mainHeatCEnergyEFF: "",
      mainHeatCEnvEFF: "",
      heatingCostCourent: "",
      transactionType: "",
      TariffType: "",
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
    // console.log(params);
    // formik.handleSubmit()
    navigate(`/${params.address}/form3`, { replace: true });
  }

  function handleBackWard() {
    dispatch(decrement());
    navigate(`/${params.address}/form1`, { replace: true });
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
        className="w-full h-[76%] flex items-center justify-items-center flex-row"
      >
        <div className="gird grid-cols-2 w-[45%] grid gap-x-10 ml-8  ">
          {data.map((item, i) => {
            if (
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
              ].includes(i)
            ) {
              return (
                <div key={item}>
                  <CheckBoxInput item={item} formik={formik}/>
                </div>
              );
            }
          })}
        </div>

        <div className="flex-1 grid gri grid-cols-2 grid-rows-4 gap-y-9 justify-items-end">
          {data.map((item, i) => {
            if ([17, 18, 19, 20, 21, 22].includes(i)) {
              return <NormalInput formik={formik} item={item} key={item} />;
            }
            if (i === 23) {
              return (
                <SelectInput
                  formik={formik}
                  item={item}
                  key={item}
                  subItems={[
                    "transEco",
                    "transGreenDeal",
                    "TransSale",
                    "TransNewDwelling",
                    "TransRental",
                    "TransRhi",
                    "TransUnknown",
                  ]}
                />
              );
            }
            if (i === 24) {
              return (
                <SelectInput
                  formik={formik}
                  item={item}
                  key={item}
                  subItems={[
                    "tariff24HrsOrDualOrBoth",
                    "tariffOffPeak",
                    "tariffSingle",
                    "tariffStandard",
                    "tariffUnknown",
                  ]}
                />
              );
            }
          })}
        </div>
      </form>

      <div className="w-full justify-between flex px-9 mt-3 mb-3">
        <Button
          variant="contained"
          startIcon={<KeyboardReturnIcon />}
          // disabled={true}
          onClick={handleBackWard}
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

export default Form2;
