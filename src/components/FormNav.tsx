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
import { StepIconProps } from "@mui/material/StepIcon";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/forms";

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

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" fontSize="inherit" />
      ) : (
        <div className="QontoStepIcon-circl">
          <CircleIcon fontSize="inherit" color="primary" />
        </div>
      )}
    </QontoStepIconRoot>
  );
}

const steps = [
  "Propretry & window-setting",
  "Heating & Transactio",
  "Lightenig & HotWater-settin",
  "EnergyInfo & SecondaryHeater",
  "Wall & Roof-setting",
];

export default function FormNav() {
  const formVals = useSelector((state: any): any => state.counter);
  const dispatch = useDispatch();

  return (
    <Stack sx={{ width: "100%", mt: 1 }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={formVals?.step}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
