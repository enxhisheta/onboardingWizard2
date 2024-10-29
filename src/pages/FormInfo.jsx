import useForm from "../hooks/use-forms";

const FormInfo = () => {
  const { formData, resetForm } = useForm();
  return (
    <>
      <div>
        <h1>Form Info</h1>
        <p>Name: {formData.name}</p>
        <p>Surname: {formData.surname}</p>
        <p>Age: {formData.age}</p>
        <p>Gender: {formData.gender}</p>
        <p>Company Name: {formData.companyName}</p>
        <p>Company Code: {formData.companyCode}</p>
      </div>

      <button onClick={resetForm} className="btn">
        Reset Form
      </button>
      <button onClick={() => (window.location.href = "/")} className="btn">
        Back to Start
      </button>
    </>
  );
};
export default FormInfo;
