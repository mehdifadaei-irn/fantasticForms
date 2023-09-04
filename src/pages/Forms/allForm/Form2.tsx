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
  "solarWaterHeatingFlag", //18
  "mainHeatEnergyEFF",
  "mainHeatEnvEFF",
  "mainHeatCEnergyEFF",
  "mainHeatCEnvEFF",
  "heatingCostCourent", //23
  "transactionType", // _______ 24
  // "TariffType",
  "MainFuelType", // _____ 25
  "SecondyHeaterType", //26 ____
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
    <div className="w-full h-screen overflow-hidden flex flex-col justify-between">
      <form
        onSubmit={mainFormik.handleSubmit}
        className="w-full h-[76%] flex items-center justify-items-center flex-col px-14 pt-5"
      >
        {/* MainHeat */}
        <div className="border-2 border-[#a8a29e] w-full flex justify-center relative py-2 rounded-md">
          <p className="bg-slate-200 font-[400] w-[110px] text-center text-zinc-800 tracking-wider text-md absolute left-[1%] -top-[4%]">
            MainHeat
          </p>
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
          {/*  */}
          <div className="grid grid-cols-2 items-center justify-center gap-x-9">
            {data.map((item, i) => {
              if ([18, 19, 20, 21, 22, 23].includes(i)) {
                if (i === 23) {
                  return (
                    <NormalInput
                      formik={mainFormik}
                      item={item}
                      key={item}
                      unit={"£peryear"}
                      // startUnit={"%"}
                      w={"100%"}
                    />
                  );
                }
                return (
                  <NormalInput
                    formik={mainFormik}
                    item={item}
                    key={item}
                    w={"100%"}
                  />
                );
              }
            })}
          </div>
        </div>
        {/* Other */}
        <div className="w-full flex flex-row-reverse mt-5 gap-x-14">
          {data.map((item, i) => {
            if (i === 24) {
              return (
                <div className="w-full border-2 border-[#a8a29e] py-6 px-4 rounded-md relative">
                  <p className="bg-slate-200 font-[400] w-[150px] text-center text-zinc-800 tracking-wider text-md absolute left-[3%] -top-[12%]">
                    Transaction
                  </p>
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
                </div>
              );
            }
            if (i === 25) {
              return (
                <div className="w-full border-2 border-[#a8a29e] py-6 px-4 rounded-md relative">
                  <p className="bg-slate-200 font-[400] w-[110px] text-center text-zinc-800 tracking-wider text-md absolute left-[3%] -top-[12%]">
                    MainHeat
                  </p>
                  <NormalInput
                    formik={mainFormik}
                    item={"MainFuelType"}
                    key={"MainFuelType"}
                    w={"100%"}
                  />
                </div>
              );
            }

            if (i === 26) {
              return (
                <div
                  key={i}
                  className="w-full border-2 border-[#a8a29e] py-6 px-4 rounded-md relative"
                >
                  <p className="bg-slate-200 font-[400] w-[170px] text-center text-zinc-800 tracking-wider text-md absolute left-[3%] -top-[12%]">
                    SecondaryHeat
                  </p>
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
          })}
        </div>
      </form>

      <div className="w-full justify-between flex px-9 mt-3">
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
    </div>
  );
}

export default Form2;
