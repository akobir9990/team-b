import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Admin from "../pages/admin/Admin";
import Login from "../pages/login/Login";
import Secure from "../pages/secure/Secure";
import Basket from "../pages/basket/Basket";
import AllProducts from "../pages/allProducts/AllProducts";
import AllArticles from "../pages/allArticles/AllArticles";
import Catalog from "../pages/catalog/Catalog";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin"
          element={
            <Secure>
              <Admin />
            </Secure>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/allarticles" element={<AllArticles />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
}

export default Router;
