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
    // let mainObj = tableData["3"][0];
    // console.log(tableData);
    // console.log(tableData["3"][0].walls.walls_fully_insulated, "aaaaas2");
    // const deee = valToCAN("walls_fully_insulated", "0");
    // console.log(deee, "dff");
    // console.log(!!tableData[`${num}`][0]);
    console.log(tableData[`1`].length > 0);
  }
  return (
    <div className="w-full flex flex-col overflow-y-auto">
      <div className="w-full overflow-y-auto py-2 px-5">
        {/* <button onClick={log}>log</button> */}
        {/* Head */}
        <div className="sticky bg-zinc-900 rounded-t-md">
          <div className="justify-between border-b-2 border-zinc-700 grid-cont text-white items-center">
            <p className="w-full font-semibold text-base text-center text-white">
              New Lable
            </p>
            <p className="font-semibold text-base text-center">Intervention</p>
            <p className="font-semibold text-base   text-center">Feature</p>
            <p className="font-semibold text-base  text-center">Current</p>
            <p className="font-semibold text-base text-center">New</p>
            <p className="font-semibold text-base text-center">
              Installation Cost
            </p>
            <p className="font-semibold text-base  text-center">
              Current Energy Cost
            </p>
            <p className="font-semibold text-base  text-center">
              New Energy Cost
            </p>
            <p className="font-semibold text-base  text-center">Total Cost</p>
          </div>
        </div>

        {/* Table Body */}

        <div className="flex flex-col overflow-y-auto h-full gap-y-2 pt-1">
          {["1", "2", "3", "4", "5", "6", "7"].map((num, i) => {
            //@ts-ignore
            if (tableData[`${num}`].length > 0) {
              //@ts-ignore
              const bgColorr = colorByEnergy(numberToEnergy[`${num}`]);
              //@ts-ignore
              if (tableData[`${num}`].length > 1) {
                console.log(num);
                //@ts-ignore
                tableData[`${num}`].map((item) => {
                  console.log("w");
                  return <p>Helo</p>;
                });
              }
              // if(numberToEnergy[`${num}`])

              // return null;
              return (
                <div className="grid-cont justify-between py-[2px]" key={i}>
                  {/* 1 */}
                  <div className="flex flex-col gap-y-1 ">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => (
                        <div
                          className="flex flex-col justify-center items-center py-1 h-full"
                          style={{
                            backgroundColor: bgColorr,
                            opacity: 0.7,
                          }}
                        >
                          <p className="text-white font-medium">
                            {/* @ts-ignore */}
                            {numberToEnergy[`${num}`]}
                            {/* moz */}
                          </p>
                        </div>
                      ))
                    }
                  </div>
                  {/* 2 */}
                  <div className="flex flex-col gap-y-1">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center py  rounded-md gap-y-1 h-full">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  [
                                    "total_cost",
                                    "new_energy_cost",
                                    "current_energy_cost",
                                  ].includes(arrData[i][0])
                                ) {
                                  // console.log(arrData[i][1]);
                                  return null;
                                }

                                return (
                                  <div
                                    key={i}
                                    className="flex-1 flex justify-center items-center bg-zinc-200 w-full "
                                  >
                                    {/* <p>s</p> */}
                                    <p className="text-[18px] font-medium text-zinc-800">
                                      {arrData[i][0]}
                                    </p>
                                  </div>
                                );
                              }
                            })}
                          </div>
                        );
                      })
                    }
                  </div>
                  {/* 3 */}
                  <div className="flex flex-col gap-y-1">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center py  rounded-md gap-y-1 h-full">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  [
                                    "total_cost",
                                    "new_energy_cost",
                                    "current_energy_cost",
                                    "installation_cost",
                                  ].includes(arrData[i][0])
                                )
                                  return null;
                                const nameDataArr = Object.entries(
                                  //@ts-ignore
                                  arrData[i][1]
                                );
                                return (
                                  <div
                                    key={i}
                                    className="w-full flex flex-col h-full"
                                  >
                                    {nameDataArr.map((it, i) => {
                                      if (it[0] == "installation_cost") {
                                        // console.log(it[1], "he") //***********************price
                                        return null;
                                      } else
                                        return (
                                          <div
                                            className="w-full px-5  py-2 bg-zinc-200 h-full"
                                            key={i}
                                          >
                                            <p className="text-[18px] font-medium text-zinc-800">
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
                        );
                      })
                    }
                  </div>
                  {/* 4 */}
                  <div className="flex flex-col gap-y-1">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center py  rounded-md gap-y-1 h-full">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  [
                                    "total_cost",
                                    "new_energy_cost",
                                    "current_energy_cost",
                                    "installation_cost",
                                  ].includes(arrData[i][0])
                                )
                                  return null;
                                const nameDataArr = Object.entries(
                                  //@ts-ignore
                                  arrData[i][1]
                                );
                                // console.log(nameDataArr[1][1][0], "b")
                                return (
                                  <div
                                    key={i}
                                    className="w-full flex flex-col h-full"
                                  >
                                    {nameDataArr.map((it, i) => {
                                      if (it[0] == "installation_cost") {
                                        return null;
                                      } else
                                        return (
                                          <div
                                            className="w-full px-5  py-2 bg-zinc-200 h-full flex items-center justify-center"
                                            key={i}
                                          >
                                            <p className="text-[18px] font-medium text-zinc-800">
                                              {
                                                //@ts-ignore
                                                valToCAN(
                                                  it[0].toString(),
                                                  //@ts-ignore
                                                  it[1][0].toString()
                                                )
                                              }
                                            </p>
                                          </div>
                                        );
                                    })}
                                  </div>
                                );
                              }
                            })}
                          </div>
                        );
                      })
                    }
                  </div>
                  {/* 5 */}
                  <div className="flex flex-col gap-y-1">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center py  rounded-md gap-y-1 h-full">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  [
                                    "total_cost",
                                    "new_energy_cost",
                                    "current_energy_cost",
                                    "installation_cost",
                                  ].includes(arrData[i][0])
                                )
                                  return null;
                                const nameDataArr = Object.entries(
                                  //@ts-ignore
                                  arrData[i][1]
                                );
                                // console.log(nameDataArr[1][1][0], "b")
                                return (
                                  <div
                                    key={i}
                                    className="w-full flex flex-col h-full"
                                  >
                                    {nameDataArr.map((it, i) => {
                                      if (it[0] == "installation_cost") {
                                        // console.log(it[1], "he") //***********************price
                                        return null;
                                      } else
                                        return (
                                          <div
                                            className="w-full px-5  py-2 bg-zinc-200 h-full flex items-center justify-center"
                                            key={i}
                                          >
                                            <p className="text-[18px] font-medium text-zinc-800">
                                              {
                                                //@ts-ignore
                                                valToCAN(
                                                  it[0].toString(),
                                                  //@ts-ignore
                                                  it[1][1].toString()
                                                )
                                              }
                                            </p>
                                          </div>
                                        );
                                    })}
                                  </div>
                                );
                              }
                            })}
                          </div>
                        );
                      })
                    }
                  </div>
                  {/* 6 INStALL COST */}
                  <div className="flex flex-col gap-y-1">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center py  rounded-md gap-y-1 h-full">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  [
                                    "total_cost",
                                    "new_energy_cost",
                                    "current_energy_cost",
                                    "installation_cost",
                                  ].includes(arrData[i][0])
                                )
                                  return null;
                                const nameDataArr = Object.entries(
                                  //@ts-ignore
                                  arrData[i][1]
                                );
                                // console.log(nameDataArr[1][1][0], "b")
                                return (
                                  <div
                                    key={i}
                                    className="w-full flex flex-col h-full"
                                  >
                                    {nameDataArr.map((it, i) => {
                                      if (it[0] == "installation_cost") {
                                        return (
                                          <div
                                            className="w-full px-5  py-2 bg-zinc-200 h-full flex items-center justify-center"
                                            key={i}
                                          >
                                            <p className="text-[18px] font-medium text-zinc-800">
                                              {
                                                //@ts-ignore
                                                it[1].toString()
                                              }
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
                        );
                      })
                    }
                  </div>
                  {/* 7 */}
                  <div className="flex flex-col gap-y-1">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center py  rounded-md gap-y-1 h-full">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  ["total_cost", "new_energy_cost"].includes(
                                    arrData[i][0]
                                  )
                                ) {
                                  // console.log(arrData[i][1]);
                                  return null;
                                } else if (
                                  "current_energy_cost" == arrData[i][0]
                                ) {
                                  return (
                                    <div
                                      key={i}
                                      className="flex-1 flex justify-center items-center bg-zinc-200 w-full "
                                    >
                                      {/* <p>s</p> */}
                                      <p className="text-[18px] font-medium text-zinc-800">
                                        {
                                          //@ts-ignore
                                          arrData[i][1].value.toString()
                                        }
                                      </p>
                                    </div>
                                  );
                                }

                                return null;
                              }
                            })}
                          </div>
                        );
                      })
                    }
                  </div>
                  {/* 8 */}
                  <div className="flex flex-col gap-y-1">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center py  rounded-md gap-y-1 h-full">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  [
                                    "total_cost",
                                    "current_energy_cost",
                                  ].includes(arrData[i][0])
                                ) {
                                  // console.log(arrData[i][1]);
                                  return null;
                                } else if ("new_energy_cost" == arrData[i][0]) {
                                  return (
                                    <div
                                      key={i}
                                      className="flex-1 flex justify-center items-center bg-zinc-200 w-full "
                                    >
                                      {/* <p>s</p> */}
                                      <p className="text-[18px] font-medium text-zinc-800">
                                        {
                                          //@ts-ignore
                                          arrData[i][1].value.toString()
                                        }
                                      </p>
                                    </div>
                                  );
                                }

                                return null;
                              }
                            })}
                          </div>
                        );
                      })
                    }
                  </div>
                  {/* 9 */}
                  <div className="flex flex-col gap-y-1">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center py  rounded-md gap-y-1 h-full">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  [
                                    "new_energy_cost",
                                    "current_energy_cost",
                                  ].includes(arrData[i][0])
                                ) {
                                  // console.log(arrData[i][1]);
                                  return null;
                                } else if ("total_cost" == arrData[i][0]) {
                                  return (
                                    <div
                                      key={i}
                                      className="flex-1 flex justify-center items-center bg-zinc-200 w-full "
                                    >
                                      {/* <p>s</p> */}
                                      <p className="text-[18px] font-medium text-zinc-800">
                                        {
                                          //@ts-ignore
                                          arrData[i][1].toString()
                                        }
                                      </p>
                                    </div>
                                  );
                                }

                                return null;
                              }
                            })}
                          </div>
                        );
                      })
                    }
                  </div>
                  {/*  */}
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
