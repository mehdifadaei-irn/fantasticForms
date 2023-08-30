import React from "react";
import { OptTableType } from "../../../type";
import { BoolArray, valToCAN } from "../../utils/CurentAndNewVal";
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

const HEIGHT = 50;

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
  let bgcolorrr = colorByEnergy(
    numberToEnergy[tableData["current_energy_lable"]]
  );
  function log() {
    console.log(tableData);
    // console.log(tableData[`1`].length > 0);
  }
  return (
    <div className="w-full flex flex-col overflow-y-auto">
      <div className="w-full overflow-y-auto py-2 px-5">
        {/* <button onClick={log}>log</button> */}
        <div className="w-full text-center mb-4 flex justify-center gap-x-2 font-semibold text-xl items-center">
          <p>CurrentEnergy: </p>
          <p
            className={` text-white flex justify-center items-center rounded-lg`}
            style={{
              backgroundColor: bgcolorrr,
              width: 40,
              height: 40,
            }}
          >
            {numberToEnergy[tableData["current_energy_lable"]]}
          </p>
        </div>
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
                  return <p>Helo</p>;
                });
              }
              // if(numberToEnergy[`${num}`])

              // return null;
              return (
                <div className="grid-cont justify-between" key={i}>
                  {/* 1 */}
                  <div className="flex flex-col gap-y-[3px]">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        let hCounter: number = 0;
                        //@ts-ignore
                        let myn11123 = Object.entries(arrData[i][1]);
                        arrData.map((item, i) => {
                          if (!isObjEmpty(arrData[i][1])) {
                            if (
                              [
                                "total_cost",
                                "new_energy_cost",
                                "current_energy_cost",
                              ].includes(arrData[i][0])
                            ) {
                              return null;
                            } else {
                              // console.log(arrData[i][1],"i");
                              //@ts-ignore
                              let myn11123 = Object.entries(arrData[i][1]);
                              hCounter += myn11123.length - 1;
                            }
                          }
                        });
                        return (
                          <div
                            className="flex flex-col gap-y-1 justify-center items-center rounded-md"
                            // style={{ height: "100%" }}
                          >
                            <p
                              className="text-white font-medium bg-purple-400 flex justify-center items-center"
                              style={{
                                width: "100%",
                                backgroundColor: bgColorr,
                                height: 57 * hCounter,
                                opacity: 0.7,
                              }}
                            >
                              {/* @ts-ignore */}
                              {numberToEnergy[`${num}`]}
                              {/* {hCounter} */}
                            </p>
                          </div>
                        );
                      })
                    }
                  </div>
                  {/* 2 */}
                  <div className="flex flex-col gap-y-1 h-full">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);

                        return (
                          <div className="flex flex-col justify-between items-center rounded-md gap-y-1">
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
                                //@ts-ignore
                                let myn11123 = Object.entries(arrData[i][1]);

                                return (
                                  <div
                                    key={i}
                                    className="w-full flex flex-col h-full"
                                    style={{
                                      // height: HEIGHT * (myn11123.length - 1),
                                      height: "100%",
                                    }}
                                  >
                                    {/* <p>s</p> */}
                                    <p
                                      className="text-[18px] font-medium text-zinc-800 bg-zinc-200 flex justify-center items-center "
                                      style={{
                                        width: "100%",
                                        height: 55 * (myn11123.length - 1),
                                        // height: "100%",
                                      }}
                                    >
                                      {arrData[i][0]}
                                      {/* {myn11123.length - 1} */}
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
                  <div className="flex flex-col gap-y-2">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center py  rounded-md gap-y-[5px]">
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
                                    className="w-full flex flex-col h-full gap-y-1 "
                                  >
                                    {nameDataArr.map((it, i) => {
                                      if (it[0] == "installation_cost") {
                                        // console.log(it[1], "he") //***********************price
                                        return null;
                                      } else
                                        return (
                                          <div
                                            className="w-full px-5 flex items-center bg-zinc-200"
                                            style={{
                                              height: 52,
                                            }}
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
                  <div className="flex flex-col gap-y-[5px] h-full">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        let maiinH;
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center  rounded-md gap-y-2 h-full">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  [
                                    "total_cost",
                                    "new_energy_cost",
                                    "current_energy_cost",
                                    "installation_cost",
                                  ].includes(arrData[i][0])
                                ) {
                                  return null;
                                }
                                const nameDataArr = Object.entries(
                                  //@ts-ignore
                                  arrData[i][1]
                                );
                                // console.log(nameDataArr[1][1][0], "b")
                                return (
                                  <div
                                    key={i}
                                    className="w-full flex flex-col h-full gap-y-1"
                                  >
                                    {nameDataArr.map((it, i) => {
                                      if (it[0] == "installation_cost") {
                                        return null;
                                      } else {
                                        if (
                                          BoolArray.includes(
                                            it[0].toString().toLocaleUpperCase()
                                          )
                                        ) {
                                          maiinH = 26;
                                        } else {
                                          maiinH = 52;
                                        }
                                        return (
                                          <div
                                            className="w-full flex flex-col h-full"
                                            key={i}
                                          >
                                            <p
                                              className="text-[18px] font-medium text-zinc-800 bg-zinc-200 flex items-center justify-center"
                                              style={{
                                                width: "100%",
                                                // height:
                                                //   maiinH *
                                                //   (nameDataArr.length - 1),
                                                height: 52,
                                              }}
                                            >
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
                                      }
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
                  <div className="flex flex-col gap-y-[5px] h-full">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        let maiinH;
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center  rounded-md gap-y-2 h-full">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  [
                                    "total_cost",
                                    "new_energy_cost",
                                    "current_energy_cost",
                                    "installation_cost",
                                  ].includes(arrData[i][0])
                                ) {
                                  return null;
                                }
                                const nameDataArr = Object.entries(
                                  //@ts-ignore
                                  arrData[i][1]
                                );
                                // console.log(nameDataArr[1][1][0], "b")
                                return (
                                  <div
                                    key={i}
                                    className="w-full flex flex-col h-full gap-y-1"
                                  >
                                    {nameDataArr.map((it, i) => {
                                      if (it[0] == "installation_cost") {
                                        return null;
                                      } else {
                                        if (
                                          BoolArray.includes(
                                            it[0].toString().toLocaleUpperCase()
                                          )
                                        ) {
                                          maiinH = 26;
                                        } else {
                                          maiinH = 52;
                                        }
                                        return (
                                          <div
                                            className="w-full flex flex-col h-full"
                                            key={i}
                                          >
                                            <p
                                              className="text-[18px] font-medium text-zinc-800 bg-zinc-200 flex items-center justify-center"
                                              style={{
                                                width: "100%",
                                                // height:
                                                //   maiinH *
                                                //   (nameDataArr.length - 1),
                                                height: 51,
                                              }}
                                            >
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
                                      }
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
                  <div className="flex flex-col gap-y-[7px] h-full">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        return (
                          <div className="flex flex-col justify-between items-center  rounded-md gap-y-[8px] h-full">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  [
                                    "total_cost",
                                    "new_energy_cost",
                                    "current_energy_cost",
                                    "installation_cost",
                                  ].includes(arrData[i][0])
                                ) {
                                  return null;
                                }
                                const nameDataArr = Object.entries(
                                  //@ts-ignore
                                  arrData[i][1]
                                );
                                //@ts-ignore
                                let myn11123 = Object.entries(arrData[i][1]);
                                // console.log(nameDataArr[1][1][0], "b")
                                return (
                                  <>
                                    {nameDataArr.map((it, i) => {
                                      if (it[0] == "installation_cost") {
                                        return (
                                          <div
                                            className="w-full px-5 bg-zinc-200 flex items-center justify-center rounded-md h-full"
                                            key={i}
                                          >
                                            <p
                                              className="text-[18px]  font-medium rounded-md text-zinc-800 flex justify-center items-center"
                                              style={{
                                                width: "100%",
                                                height:
                                                  52 * (myn11123.length - 1),
                                                // height: "100%",
                                              }}
                                            >
                                              {
                                                //@ts-ignore
                                                it[1].toString()
                                              }
                                            </p>
                                          </div>
                                        );
                                      } else return null;
                                    })}
                                  </>
                                );
                              }
                            })}
                          </div>
                        );
                      })
                    }
                  </div>
                  {/* 7 */}
                  <div className="flex flex-col gap-y-[7px]  h-full">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        let hCounter: number = 0;
                        //@ts-ignore
                        let myn11123 = Object.entries(arrData[i][1]);
                        arrData.map((item, i) => {
                          if (!isObjEmpty(arrData[i][1])) {
                            if (
                              [
                                "total_cost",
                                "new_energy_cost",
                                "current_energy_cost",
                              ].includes(arrData[i][0])
                            ) {
                              return null;
                            } else {
                              // console.log(arrData[i][1],"i");
                              //@ts-ignore
                              let myn11123 = Object.entries(arrData[i][1]);
                              hCounter += myn11123.length - 1;
                            }
                          }
                        });
                        return (
                          <div className="flex flex-col justify-between items-center py  rounded-md gap-y-[8px]">
                            {arrData.map((_, i) => {
                              if (!isObjEmpty(arrData[i][1])) {
                                if (
                                  ["total_cost", "new_energy_cost"].includes(
                                    arrData[i][0]
                                  )
                                ) {
                                  //
                                  // console.log(arrData[i][1]);
                                  return null;
                                } else if (
                                  "current_energy_cost" == arrData[i][0]
                                ) {
                                  return (
                                    <div
                                      key={i}
                                      className="flex-1 flex justify-center items-center w-full h-full"
                                    >
                                      {/* <p>s</p> */}
                                      <p
                                        className="text-[18px] font-medium text-zinc-800 bg-zinc-200 flex justify-center rounded-md items-center"
                                        style={{
                                          width: "100%",
                                          height: 56.6 * hCounter,
                                        }}
                                      >
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
                  <div className="flex flex-col gap-y-[7px]">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        let hCounter: number = 0;
                        //@ts-ignore
                        let myn11123 = Object.entries(arrData[i][1]);
                        arrData.map((item, i) => {
                          if (!isObjEmpty(arrData[i][1])) {
                            if (
                              [
                                "total_cost",
                                "new_energy_cost",
                                "current_energy_cost",
                              ].includes(arrData[i][0])
                            ) {
                              return null;
                            } else {
                              // console.log(arrData[i][1],"i");
                              //@ts-ignore
                              let myn11123 = Object.entries(arrData[i][1]);
                              hCounter += myn11123.length - 1;
                            }
                          }
                        });
                        return (
                          <div className="flex flex-col justify-between items-center py  rounded-md gap-y-[8px]">
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
                                      className="flex-1 flex justify-center items-center  w-full h-full"
                                    >
                                      {/* <p>s</p> */}
                                      <p
                                        className="text-[18px] font-medium text-zinc-800 bg-zinc-200 flex justify-center items-center text-center"
                                        style={{
                                          width: "100%",
                                          height: 56.6 * hCounter,
                                        }}
                                      >
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
                  <div className="flex flex-col gap-y-[7px]">
                    {
                      //@ts-ignore
                      tableData[`${num}`].map((item, i) => {
                        //@ts-ignore
                        const data = tableData[`${num}`][i];
                        const arrData = Object.entries(data);
                        let hCounter: number = 0;
                        //@ts-ignore
                        let myn11123 = Object.entries(arrData[i][1]);
                        arrData.map((item, i) => {
                          if (!isObjEmpty(arrData[i][1])) {
                            if (
                              [
                                "total_cost",
                                "new_energy_cost",
                                "current_energy_cost",
                              ].includes(arrData[i][0])
                            ) {
                              return null;
                            } else {
                              // console.log(arrData[i][1],"i");
                              //@ts-ignore
                              let myn11123 = Object.entries(arrData[i][1]);
                              hCounter += myn11123.length - 1;
                            }
                          }
                        });
                        return (
                          <div className="flex flex-col justify-between items-center  rounded-md gap-y-[8px]">
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
                                      className="flex-1 flex justify-center items-center  w-full h-full "
                                    >
                                      {/* <p>s</p> */}
                                      <p
                                        className="text-[18px] font-medium text-zinc-800 bg-zinc-200 flex justify-center items-center"
                                        style={{
                                          width: "100%",
                                          // height: 52 * hCounter,
                                          height: 56.6 * hCounter,
                                        }}
                                      >
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
