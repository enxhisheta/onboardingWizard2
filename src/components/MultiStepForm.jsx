import useForm from "../hooks/use-Forms";
import StepOne from "./StepOne.jsx";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const MultiStepForm = () => {
  const { step, formData, saveData, nextStep, prevStep, resetForm } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    saveData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 2) {
      nextStep();
    } else {
      console.log("Form submitted:", formData);
      resetForm();
    }
  };

  return (
    <div id="root">
      <form onSubmit={handleSubmit} className="form">
        {step === 0 && (
          <StepOne formData={formData} handleChange={handleChange} />
        )}
        {step === 1 && (
          <StepTwo formData={formData} handleChange={handleChange} />
        )}
        {step === 2 && (
          <StepThree formData={formData} handleChange={handleChange} />
        )}
        <div>
          {step > 0 && (
            <button type="button" onClick={prevStep}>
              Back
            </button>
          )}
          <button type="submit">{step === 2 ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
