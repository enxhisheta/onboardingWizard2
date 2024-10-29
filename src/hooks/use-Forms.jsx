import { useState, useEffect } from "react";

const useForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    gender: "",
    companyName: "",
    companyCode: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const { step, data } = JSON.parse(storedData);
      setStep(step);
      setFormData(data);
    }
  }, []);

  const saveData = (newData) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, ...newData };
      localStorage.setItem(
        "formData",
        JSON.stringify({ step, data: updatedData })
      );
      return updatedData;
    });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const resetForm = () => {
    setStep(1);
    setFormData({
      name: "",
      surname: "",
      age: "",
      gender: "",
      companyName: "",
      companyCode: "",
    });
    localStorage.removeItem("formData");
  };

  return {
    step,
    formData,
    saveData,
    nextStep,
    prevStep,
    resetForm,
    setFormData,
  };
};

export default useForm;
