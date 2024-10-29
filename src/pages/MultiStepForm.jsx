import useForm from "../hooks/use-forms";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";

const MultiStepForm = () => {
  const { step, formData, saveData, nextStep, prevStep, setFormData } =
    useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(formData);
    if (step < 3) {
      nextStep();
    } else {
      console.log("Form submitted:", formData);
      window.location.href = "/form-info";
    }
  };

  return (
    <div id="root">
      <h1>Multi-Step Form</h1>
      <form onSubmit={handleSubmit} className="form">
        {step === 1 && (
          <StepOne formData={formData} handleChange={handleChange} />
        )}
        {step === 2 && (
          <StepTwo formData={formData} handleChange={handleChange} />
        )}
        {step === 3 && (
          <StepThree formData={formData} handleChange={handleChange} />
        )}
        <div>
          {step > 1 && (
            <button type="button" onClick={prevStep}>
              Back
            </button>
          )}
          <button type="submit">{step === 3 ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
