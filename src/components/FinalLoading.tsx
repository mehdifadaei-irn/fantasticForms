import { Skeleton } from "@mui/material";
import React from "react";
import energy from "../assets/enerrrrr.json";
import Lottie from "lottie-react";
import { useStopwatch } from "react-timer-hook";

const Wi = 75; // 150   225   300
const FinalLoading = () => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });
  return (
    <div>
      <div className=" absolute w-screen h-screen bgload top-0 ring-0 left-0 flex flex-col justify-center items-center">
        <Lottie
          animationData={energy}
          width={200}
          height={200}
          className="w-[300px] h-[300px]"
        />
        <div style={{ fontSize: "40px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      </div>
      <div className="flex flex-col w-full h-full px-2 gap-y-2 ">
        <div className="flex flex-row justify-between">
          {[1, 1, 1, 1, 1, 1, 1].map((item, i) => (
            <div key={i} className="">
              <Skeleton
                variant="rounded"
                animation="wave"
                width={210}
                height={60}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <Skeleton
            variant="rounded"
            animation="wave"
            width={210}
            height={375}
          />
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={"100%"}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <Skeleton
            variant="rounded"
            animation="wave"
            width={210}
            height={375}
          />
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={"100%"}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={210}
              height={"100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalLoading;
