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
  "micro", //14
  "portable",
  "roomHeater",
  "otherUnknown",
  "solarWaterHeatingFlag",
  "mainHeatEnergyEFF",
  "mainHeatEnvEFF",
  "mainHeatCEnergyEFF",
  "mainHeatCEnvEFF",
  "heatingCostCourent", //23
  "transactionType",
  "TariffType",
  "SecondyHeaterType", //26
  "MainFuelType",
];

function Form2({ setStep, mainFormik }: any) {
  const navigate = useNavigate();
  const params = useParams();

  const dispatch = useDispatch();

  function handleForward() {
    dispatch(increment());
    // console.log(params);
    // formik.handleSubmit()
    navigate(`/${params.address}/form3`, { replace: true });
    setStep((prev: number) => prev + 1);
  }

  function handleBackWard() {
    dispatch(decrement());
    navigate(`/${params.address}/form1`, { replace: true });
    setStep((prev: number) => prev - 1);
  }

  async function handleCheck() {
    // await formik.validateForm();
    await mainFormik.handleSubmit();
    console.log("va", mainFormik.isValid);
  }

  return (
    <>
      <form
        onSubmit={mainFormik.handleSubmit}
        className="w-full h-[76%] flex items-center justify-items-center flex-row pr-8"
      >
        <div className="gird grid-cols-2 w-[45%] grid gap-x-10 ml-8  ">
          {data.map((item, i) => {
            if (
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
              ].includes(i)
            ) {
              return (
                <div key={item}>
                  <CheckBoxInput item={item} formik={mainFormik} />
                </div>
              );
            }
          })}
        </div>

        <div className="flex-1 grid gri grid-cols-2 gap-10  grid-rows-4 gap-y-9">
          {data.map((item, i) => {
            if ([18, 19, 20, 21, 22,27].includes(i)) {
              return (
                <NormalInput
                  formik={mainFormik}
                  item={item}
                  key={item}
                  w={"100%"}
                />
              );
            }
            if (i === 24) {
              return (
                <SelectInput
                  formik={mainFormik}
                  item={item}
                  key={item}
                  w={"100%"}
                  subItems={[
                    "transEco",
                    "transGreenDeal",
                    "transSale",
                    "transNewDwelling",
                    "transRental",
                    "transRhi",
                    "transUnknown",
                  ]}
                />
              );
            }
            if (i === 25) {
              return (
                <SelectInput
                  formik={mainFormik}
                  item={item}
                  key={item}
                  w={"100%"}
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
            if (i === 26) {
              return (
                <div key={i} className="w-full h-full flex justify-center">
                  <SelectInput
                    key={i}
                    formik={mainFormik}
                    item={item}
                    w={"100%"}
                    subItems={[
                      "secondHeatingElectric",
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
            if (i === 23) {
              return (
                <NormalInput
                  formik={mainFormik}
                  item={item}
                  key={item}
                  unit={"£peryear"}
                  startUnit={"%"}
                  w={"100%"}
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
        <Button
          variant="contained"
          onClick={handleCheck}
          endIcon={<CheckIcon />}
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

export default Form2;
