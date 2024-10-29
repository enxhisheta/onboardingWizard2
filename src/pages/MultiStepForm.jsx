import useForm from "../hooks/use-Forms";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";

const MultiStepForm = () => {
  const { step, formData, saveData, nextStep, prevStep, setFormData } =
    useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { [name]: value };
    setFormData({ ...formData, [name]: value });
    saveData(newData);
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 2) {
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
