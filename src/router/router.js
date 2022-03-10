import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activitie from "../pages/Activitie";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/activitie/:id" element={<Activitie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
