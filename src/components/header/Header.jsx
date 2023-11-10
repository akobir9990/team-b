import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import burger from "../../assets/images/burger.svg";
import searchIcon from "../../assets/images/search.svg";
import likes from "../../assets/images/likeIcon.svg";
import products from "../../assets/images/productsIcon.svg";
import basket from "../../assets/images/basketIcon.svg";
import arrowDown from "../../assets/images/arrowDown.svg";
import userIcon from "../../assets/images/user.svg";
import "./header.css";
import { useGlobalContext } from "../../context";

function Header() {
  const { user } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header_bg">
      <div className="container header-container">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
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
            <img src={likes} alt="" /> <span>Избранное</span>
          </NavLink>
          <NavLink to="/orders" className="orders btn">
            <img src={products} alt="" /> <span>продукты</span>
          </NavLink>
          <NavLink to="/basket" className="basket btn">
            <img src={basket} alt="" /> <span>Корзина</span>
          </NavLink>
        </div>
        <div className="admin">
          <img src={userIcon} alt="ava" className="ava" />
          <NavLink to="/login">
            <span>{user}</span>
          </NavLink>
          <img src={arrowDown} alt="icon" className="arrowDown" />
        </div>
      </div>
      {isOpen && (
        <div className="modal">
          <NavLink className="navmodel" to="/milk">
            Молоко
          </NavLink>
          <NavLink className="navmodel" to="/bread">
            Хлеб
          </NavLink>
          <NavLink className="navmodel" to="/fruits">
            Фрукты и овощи
          </NavLink>
          <NavLink className="navmodel" to="/cheese">
            Сыр
          </NavLink>
          <NavLink className="navmodel" to="/eggs">
            Яйцо
          </NavLink>
          <NavLink className="navmodel" to="/frozen">
            Замороженные продукты
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
