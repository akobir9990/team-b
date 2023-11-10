/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const getUser = () => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  };
  const [user, setUser] = useState(getUser());
  const getProducts = () => {
    return localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];
  };
  const [products, setProducts] = useState(getProducts());
  const [productsApi, setProductsApi] = useState([]);

  const getBasket = () => {
    return localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : [];
  };
  const [basket, setBasket] = useState(getBasket());
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productCategory, setProductCategory] = useState("");

  const addProduct = (name, price, category) => {
    const newProduct = {
      name,
      price,
      category,
      itemCounter: 1,
    };
    if (name || price || category) {
      setProducts((p) => {
        localStorage.setItem("products", JSON.stringify([...p, newProduct]));
        return [...p, newProduct];
      });
      setProductName(() => "");
      setProductPrice(() => "");
      setProductCategory(() => "");
    }
  };

  const handleSubmit = ({ e, user }) => {
    e.preventDefault;
    const newUser = {
      name: user,
    };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    Navigate("/admin");
    console.log("newUser from context", newUser);
  };
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const statiArr = [
    {
      id: 1,
      name: "Режим использования масок и перчаток на территории магазинов",
      desc: 'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
      date: "05.03.2021",
    },
    {
      id: 2,
      name: "Весеннее настроение для каждой",
      desc: "8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.",
      date: "05.03.2021",
    },
    {
      id: 3,
      name: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
      desc: "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
      date: "22.02.2020",
    },
  ];

  return (
    <AppContext.Provider
      value={{
        getUser,
        getProducts,
        handleSubmit,
        user,
        setUser,
        products,
        setProducts,
        basket,
        setBasket,
        productName,
        setProductName,
        productPrice,
        setProductPrice,
        productCategory,
        setProductCategory,
        addProduct,
        getBasket,
        statiArr,
        productsApi,
        setProductsApi,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
