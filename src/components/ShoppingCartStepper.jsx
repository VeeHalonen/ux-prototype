import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const ShoppingCartStepper = ({ step }) => {
  const steps = ["Order Summary", "Shipping and Payment", "Confirmation"];
  return (
    <Stepper activeStep={step - 1} style={{ marginTop: 30, marginBottom: 30 }}>
      {steps.map((label, index) => {
        const stepProps = {};
        const labelProps = {};
        if (step > steps.length) {
          stepProps.completed = true;
        }
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default ShoppingCartStepper;
