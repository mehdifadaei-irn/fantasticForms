import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import CircleIcon from "@mui/icons-material/Circle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useSelector, useDispatch } from "react-redux";
import { increment, setStep } from "../redux/forms";
import { useParams, useNavigate } from "react-router-dom";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2563eb",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#2563eb",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#fff",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#2563eb",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#2563eb",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: any) {
  const { active, completed, className, id } = props;
  const { value, step } = useSelector((state: any): any => state.counter);
  const contentDone = (
    <div>
      <Check
        className="QontoStepIcon-completedIcon"
        fontSize="medium"
        // onClick={() =>
        //   navigate(`/${params.address}/form${formVals.step}`, {
        //     replace: true,
        //   })
        // }

        sx={{
          cursor: "pointer",
          mb: 1,
          color: "#2563eb",
        }}
      />
      {/* <p className="text-black">{active}</p> */}
    </div>
  );
  const contentManual = (
    <div className="QontoStepIcon-circl">
      <CircleIcon
        fontSize="inherit"
        color="primary"
        sx={{
          cursor: "pointer",
          mb: 1,
          // color: "#2563eb"
        }}
      />
      {/* <p className="text-black">{id}asda{step}</p>  */}
    </div>
  );
  const contentError = (
    <div>
      <ErrorOutlineIcon
        className="QontoStepIcon-completedIcon"
        fontSize="medium"
        // onClick={() =>
        //   navigate(`/${params.address}/form${formVals.step}`, {
        //     replace: true,
        //   })
        // }

        sx={{
          cursor: "pointer",
          color: "red",
          mb: 1,
        }}
      />
    </div>
  );
  if (value.includes(id)) {
    return contentError;
  }
  if (id < step) {
    return contentDone;
  }
  return contentManual;
  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {step === id ? (
        <div>
          <Check
            className="QontoStepIcon-completedIcon"
            fontSize="inherit"
            // onClick={() =>
            //   navigate(`/${params.address}/form${formVals.step}`, {
            //     replace: true,
            //   })
            // }
            sx={{
              cursor: "pointer",
            }}
          />
          {/* <p className="text-black">{active}</p> */}
        </div>
      ) : (
        <div className="QontoStepIcon-circl">
          <CircleIcon
            fontSize="inherit"
            color="primary"
            sx={{
              cursor: "pointer",
            }}
          />
          {/* <p className="text-black">{id}asda{step}</p>  */}
        </div>
      )}
    </QontoStepIconRoot>
  );
}

const steps = [
  "Propertry&window&tenure",
  "Heating & Transaction",
  "Lightenig & HotWater",
  "Wall & Roof & floor-setting",
  "EnergyInfo & SecondaryHeater",
];

export default function FormNav({ setNavigator }: { setNavigator: any }) {
  const params = useParams();
  const formVals = useSelector((state: any): any => state.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Stack sx={{ width: "100%", mt: 1 }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={formVals?.step}
        connector={<QontoConnector />}
      >
        {steps.map((label, i: number) => (
          <Step
            key={label}
            onClick={() => {
              // dispatch(increment());
              dispatch(setStep(i));
              // navigate(`/${params.address}/form${i + 1}`, {
              //   replace: true,
              // });
              // setStepp(i + 1);
              // setNavigator(i + 1);
              setNavigator((prev: number) => i + 1);
              navigate(`/${params.address}/form2`, { replace: true });
            }}
          >
            <StepLabel StepIconComponent={() => <QontoStepIcon id={i} />}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
