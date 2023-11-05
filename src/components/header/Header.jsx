import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import burger from "../../assets/images/burger.svg";
import searchIcon from "../../assets/images/search.svg";
import likes from "../../assets/images/likeIcon.svg";
import products from "../../assets/images/productsIcon.svg";
import basket from "../../assets/images/basketIcon.svg";
import arrowDown from "../../assets/images/arrowDown.svg";
import user from "../../assets/images/user.svg";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <button className="catalog" onClick={openModal}>
          <img src={burger} alt="burger" className="burger" />
          <span>Каталог</span>
        </button>
        <div className="search">
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="Найти товар"
          />
          <img className="searchIcon" src={searchIcon} alt="searchIcon" />
        </div>
        <div className="btns">
          <NavLink to="/likes" className="likes btn">
            <img src={likes} alt="" />
            <span>Избранное</span>
          </NavLink>
          <NavLink to="/orders" className="orders btn">
            <img src={products} alt="" />
            <span>продукты</span>
          </NavLink>
          <NavLink to="/basket" className="basket btn">
            <img src={basket} alt="" />
            <span>Корзина</span>
          </NavLink>
        </div>
        <div className="admin">
          <img src={user} alt="ava" className="ava" />
          <NavLink to="/login">
            <span>LogIn</span>
          </NavLink>
          <img src={arrowDown} alt="icon" className="arrowDown" />
        </div>
      </div>
      {isOpen && (
        <div className="modal">
          {'Молоко, сыр, яйцо , Хлеб , Фрукты и овощи , Замороженные продукты'}
          <button className="btnclos" onClick={closeModal}>closet</button>
        </div>
      )}
    </div>
  );
}

export default Header;
