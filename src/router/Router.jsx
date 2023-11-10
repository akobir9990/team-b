import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/home/LoginPage";
import Meps from "../pages/home/MepsPage"

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<HomePage  />} />
        <Route path="/home" element={<MepsPage />} />
      </Routes>
    </>
  );
}

export default Router;
