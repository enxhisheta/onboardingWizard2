import { Route, Routes } from "react-router-dom";
import MultiStepForm from "./pages/MultiStepForm";
import StartForm from "./pages/StartForm";
import FormInfo from "./pages/FormInfo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StartForm />} />
      <Route path="/form" element={<MultiStepForm />} />
      <Route path="/form-info" element={<FormInfo />} />
    </Routes>
  );
};

export default AppRoutes;
