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
  "unHeatedCorridorLength", //4
  "extentionCount",
  "totalFloorArea", //6
  "floorLevel",
  "floorHeight", //8
  "numberHabitableRooms",
  "numberHeatedRooms",
  "numberOpenFireLaces", //11
  "flatStoreyCount", //add
  "constructionAgeBandCategory", //add
  "tenure", //+12
  "GlazingType", //+13
  "WindowsEnergyEFF",
  "WindowsEnvEFF",
  "multiGlazeProportion", //add
];

function Form1({ setStep, mainFormik }: any) {
  const navigate = useNavigate();
  const params = useParams();

  const { inputs, isLoading } = useSelector((state: any): any => state.all);

  const dispatch = useDispatch();

  function handleForward() {
    dispatch(increment());
    navigate(`/${params.address}/form2`, { replace: true });
    setStep((prev: number) => prev + 1);
  }

  async function handleCheck() {
    // await mainFormik.validateForm();
    // console.log(mainFormik.values)
    await mainFormik.handleSubmit();
    // console.log(isLoading, "Load");
    // console.log(inputs?.property_setting?.property_type, "si");
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
          // onSubmit={mainFormik.handleSubmit}
          className="w-full h-[76%] justify-center xl:gap-5 gap-0 pb-0 pt-8 grid  xl:grid-cols-4 grid-cols-3 xl:px-9 px-3 items-center justify-items-center"
        >
          {data.map((item, i) => {
            if (i === 0) {
              return (
                <div key={i} className="w-full h-full flex justify-center">
                  <SelectInput
                    key={i}
                    formik={mainFormik}
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
                <div key={i} className="w-full h-full flex justify-center">
                  <SelectInput
                    key={i}
                    formik={mainFormik}
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
                <div key={i} className="w-full h-full flex justify-center">
                  <SelectInput
                    key={i}
                    formik={mainFormik}
                    item={item}
                    subItems={["Yes", "No"]}
                  />
                </div>
              );
            }
            if (i === 14) {
              return (
                <div key={i} className="w-full h-full flex justify-center">
                  <SelectInput
                    key={i}
                    formik={mainFormik}
                    item={item}
                    subItems={[
                      "tenureOwnerOccupied",
                      "tenurePrivateRent",
                      "tenureSocialRent",
                      "tenureUnknown",
                    ]}
                  />
                </div>
              );
            }
            if (i === 15) {
              return (
                <div key={i} className="w-full h-full flex justify-center">
                  <SelectInput
                    key={i}
                    formik={mainFormik}
                    item={item}
                    subItems={[
                      "windowsSingleGlazed",
                      "windowsSecondaryGlazed",
                      "windowsDoubleGlazed",
                      "windowsTripleGlazed",
                      "windowsHighPerformanceGlazed",
                      "windowsMixedGlazed",
                      "windowsOtherUnknownGlazed",
                    ]}
                  />
                </div>
              );
            }
            if (i === 4) {
              return (
                <div key={i} className="w-full h-full ">
                  <NormalInput formik={mainFormik} item={item} unit={"m"} />
                </div>
              );
            }
            if (i === 6) {
              return (
                <div key={i} className="w-full h-full">
                  <NormalInput
                    formik={mainFormik}
                    item={item}
                    unit={"m"}
                    topUnit={"2"}
                  />
                </div>
              );
            }
            if (i === 8) {
              return (
                <div key={i} className="w-full h-full">
                  <NormalInput formik={mainFormik} item={item} unit="m" />
                </div>
              );
            } else {
              return (
                <div key={i} className="w-full h-full">
                  <NormalInput formik={mainFormik} item={item} />
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
