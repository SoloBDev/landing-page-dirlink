import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Registration from "../pages/Registeration";

const MainRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<Registration />} />
    </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
