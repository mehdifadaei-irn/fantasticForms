import React from "react";
import { useCalculateTables } from "../../../hooks/useCalculateDatas";
import FinalLoading from "../../../components/FinalLoading";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import OptTable from "../../optTable/OptTable";

const Optimization = ({ setStep, mainFormik }: any) => {
  const { contorollertype } = useSelector((state: any): any => state.all);
  const {
    mutate: calculateAllTable,
    data: tableData,
    isLoading,
    isSuccess,
  } = useCalculateTables();

  function handleSend() {
    calculateAllTable({
      Datas: mainFormik.values,
      controlertype: contorollertype,
    });
  }

  function log() {
    console.log(tableData);
  }

  return (
    <div className="w-full h-full overflow-x-hidden">
      {/* Loading */}
      {isLoading ? (
        <FinalLoading />
      ) : (
        <div>
          {isSuccess ? (
            <OptTable tableData={tableData} setStep={setStep} />
          ) : (
            <div></div>
          )}
        </div>
      )}

      {/* BTN  */}
      {tableData ? null : (
        <div
          className="w-full h-full justify-center items-center"
          style={{
            display: isLoading ? "none" : "flex",
          }}
        >
          <Button variant="contained" onClick={handleSend} disabled={isLoading}>
            OPTIMIZE
          </Button>
        </div>
      )}
      <Toaster richColors position="bottom-right" />
    </div>
  );
};

export default Optimization;
