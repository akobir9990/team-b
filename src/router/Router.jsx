import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Admin from "../pages/admin/Admin";
function Router(products, setProducts) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin"
          element={<Admin products={products} setProducts={setProducts} />}
        />
      </Routes>
    </>
  );
}

export default Router;
