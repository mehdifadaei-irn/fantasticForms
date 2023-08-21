import React from "react";
import { OptTableType } from "../../../type";
import { valToCAN } from "../../utils/CurentAndNewVal";
import { colorByEnergy } from "../../utils/colorForEnergy";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const numberToEnergy = {
  "1": "A",
  "2": "B",
  "3": "C",
  "4": "D",
  "5": "E",
  "6": "F",
  "7": "G",
};

interface TableType {
  tableData: OptTableType;
  setStep?: any;
}

function isObjEmpty(objectName: any) {
  return (
    objectName &&
    Object.keys(objectName).length === 0 &&
    objectName.constructor === Object
  );
}

const OptTable = ({ tableData, setStep }: TableType) => {
  const navigate = useNavigate();
  function log() {
    let mainObj = tableData["3"][0];
    console.log(tableData);
    console.log(tableData["3"][0].walls.walls_fully_insulated, "aaaaas2");
    const deee = valToCAN("walls_fully_insulated", "0");
    console.log(deee, "dff");
  }
  return (
    <div className="w-full flex flex-col overflow-y-auto">
      <div className="w-full overflow-y-auto">
        {/* <button onClick={log}>log</button> */}
        {/* Head */}
        <div className="sticky bg-zinc-500 rounded-t-sm">
          <div className="justify-between border-b-2 border-zinc-700 grid-cont text-white items-center">
            <p className="w-full font-semibold text-base text-center text-white">
              Label
            </p>
            <p className="font-semibold text-base text-center">Type</p>
            <p className="font-semibold text-base   text-center">name</p>
            <p className="font-semibold text-base  text-center">Current</p>
            <p className="font-semibold text-base text-center">New</p>
            <p className="font-semibold text-base text-center">Price</p>
            <p className="font-semibold text-base  text-center">Total Price</p>
          </div>
        </div>

        {/* Table Body */}

        <div className="flex flex-col overflow-y-auto h-full">
          {["1", "2", "3", "4", "5", "6", "7"].map((num, i) => {
            //@ts-ignore
            if (!!tableData[`${num}`][0]) {
              //@ts-ignore
              const data = tableData[`${num}`][0];
              const arrData = Object.entries(data);
              // if(numberToEnergy[`${num}`])
              //@ts-ignore
              const bgColorr = colorByEnergy(numberToEnergy[`${num}`]);
              return (
                <div className="grid-cont justify-between py-[2px]" key={i}>
                  {/* 1 */}
                  <div
                    className="flex flex-col justify-center items-center py-1"
                    style={{
                      backgroundColor: bgColorr,
                      opacity: 0.8,
                    }}
                  >
                    <p className="text-white font-bold">
                      {/* @ts-ignore */}
                      {numberToEnergy[`${num}`]}
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex flex-col justify-between items-center py-1 bg-zinc-200 rounded-md">
                    {arrData.map((_, i) => {
                      if (!isObjEmpty(arrData[i][1])) {
                        if (arrData[i][0] === "totalPrice") {
                          console.log(arrData[i][1]);
                          return null;
                        }

                        return (
                          <div
                            key={i}
                            className="flex-1 flex justify-center items-center"
                          >
                            {/* <p>s</p> */}
                            <p className="text-[18px] font-bold text-zinc-800">
                              {arrData[i][0]}
                            </p>
                          </div>
                        );
                      }
                    })}
                  </div>
                  {/* 3 */}
                  <div className="flex flex-col justify-between items-center py-1 bg-zinc-200">
                    {arrData.map((_, i) => {
                      if (!isObjEmpty(arrData[i][1])) {
                        if (arrData[i][0] === "totalPrice") return null;
                        //@ts-ignore
                        const nameDataArr = Object.entries(arrData[i][1]);
                        return (
                          <div key={i}>
                            {nameDataArr.map((it, i) => {
                              if (it[0] == "price") {
                                // console.log(it[1], "he") //***********************price
                                return null;
                              } else
                                return (
                                  <div className="w-full px-5">
                                    <p className="text-[18px] font-bold text-zinc-800">
                                      {it[0]}
                                    </p>
                                  </div>
                                );
                            })}
                          </div>
                        );
                      }
                    })}
                  </div>

                  {/* 4 */}

                  <div className="flex flex-col justify-between items-center py-1 bg-zinc-200">
                    {arrData.map((_, i) => {
                      if (!isObjEmpty(arrData[i][1])) {
                        if (arrData[i][0] === "totalPrice") return null;
                        //@ts-ignore
                        const nameDataArr = Object.entries(arrData[i][1]);
                        return (
                          <div key={i}>
                            {nameDataArr.map((it: any, i) => {
                              if (it[0] == "price") {
                                return null;
                              } else
                                return (
                                  <div className="w-full flex-1 px-5 flex items-center justify-center">
                                    {/* <p>{it[1][0]}</p> */}
                                    <p className="text-[18px] font-bold text-zinc-800">
                                      {valToCAN(
                                        it[0].toString(),
                                        it[1][0].toString()
                                      )}
                                    </p>
                                  </div>
                                );
                            })}
                          </div>
                        );
                      }
                    })}
                  </div>

                  {/* 5 */}
                  <div className="flex flex-col justify-between items-center py-1 bg-zinc-200">
                    {arrData.map((_, i) => {
                      if (!isObjEmpty(arrData[i][1])) {
                        if (arrData[i][0] === "totalPrice") return null;
                        //@ts-ignore
                        const nameDataArr = Object.entries(arrData[i][1]);
                        return (
                          <div key={i}>
                            {nameDataArr.map((it: any, i) => {
                              if (it[0] == "price") {
                                return null;
                              } else
                                return (
                                  <div className="w-full flex-1 px-5 flex items-center justify-center">
                                    <p className="text-[18px] font-bold text-zinc-800">
                                      {valToCAN(
                                        it[0].toString(),
                                        it[1][1].toString()
                                      )}
                                    </p>
                                  </div>
                                );
                            })}
                          </div>
                        );
                      }
                    })}
                  </div>

                  {/* 6 */}
                  <div className="flex flex-col justify-between items-center py-1 bg-zinc-200">
                    {arrData.map((_, i) => {
                      if (!isObjEmpty(arrData[i][1])) {
                        if (arrData[i][0] === "totalPrice") return null;
                        //@ts-ignore
                        const nameDataArr = Object.entries(arrData[i][1]);
                        return (
                          <div
                            key={i}
                            className="flex-1 flex justify-center items-center"
                          >
                            {nameDataArr.map((it: any, i) => {
                              if (it[0] == "price") {
                                return (
                                  <div className="w-full px-5 flex items-center justify-center">
                                    <p className="text-[18px] font-bold text-zinc-800">
                                      {it[1]}
                                    </p>
                                  </div>
                                );
                              } else return null;
                            })}
                          </div>
                        );
                      }
                    })}
                  </div>

                  {/* 7 */}
                  <div className="flex flex-col justify-between items-center py-1 bg-zinc-200">
                    {arrData.map((_, i) => {
                      if (!isObjEmpty(arrData[i][1])) {
                        if (arrData[i][0] === "totalPrice") {
                          //   console.log(arrData[i][1]);
                          return (
                            <div className="flex  h-full items-center">
                              <p className="text-[18px] font-bold text-zinc-800">
                                {/* @ts-ignore */}
                                {arrData[i][1]}
                              </p>
                            </div>
                          );
                        }

                        return null;
                      }
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex justify-center gap-x-28 pt-4">
          <Button
            variant="contained"
            startIcon={<KeyboardReturnIcon />}
            onClick={() => {
              // navigate(`/${params.address}/form3`, { replace: true });
              setStep((prev: number) => prev - 1);
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            Another
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OptTable;
