/* eslint-disable react/prop-types */

const StepThree = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Step 3: Company Information</h2>
      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Company Code:
        <input
          type="text"
          name="companyCode"
          value={formData.companyCode}
          onChange={handleChange}
          required
        />
      </label>
    </>
  );
};

export default StepThree;
