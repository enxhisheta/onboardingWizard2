/* eslint-disable react/prop-types */

const StepOne = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Step 1: Personal Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          required
        />
      </label>
    </>
  );
};

export default StepOne;
