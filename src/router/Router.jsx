import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/home/LoginPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default Router;
