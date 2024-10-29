/* eslint-disable react/prop-types */

const StepTwo = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Step 2: Age and Gender</h2>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
    </>
  );
};

export { StepTwo };
