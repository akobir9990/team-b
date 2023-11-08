import { useState } from "react";
import Router from "./router/Router";


const getLSProduct = () => {
  return localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
};
function App() {
  const [products, setProducts] = useState(getLSProduct);
  return <Router products={products} setProducts={setProducts} />;

}

export default App;
