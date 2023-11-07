import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/home/LoginPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default Router;
