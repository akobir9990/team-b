import arrowRight from "../../assets/images/arrowRight.svg";
import "../item/item.css";
import likeIcon from "../../assets/images/likeIcon.svg";
import starRanking from "../../assets/images/star_ranking.svg";
import "./stocks.css";
import { useGlobalContext } from "../../context";
import { NavLink } from "react-router-dom";

function Stocks() {
  const { setBasket, products, setProducts } = useGlobalContext();

  const addToBasket = (item) => {
    const newBasketItem = item;
    setBasket((p) => {
      localStorage.setItem("basket", JSON.stringify([...p, newBasketItem]));
      return [...p, newBasketItem];
    });
  };

  fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => setProducts(data));

  return (
    <div className="stocks-container">
      <div className="stocksText">
        <h1>Акции</h1>
        <button className="allProductsBTN">
          <NavLink to="allproducts">Все продукты</NavLink>
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>
      <div className="stocksBox">
        {products.map((item) => {
          return (
            <div key={item.id}>
              <div className="promotion">
                <div className="promotionsItemImages">
                  <img src={item.images[1]} alt="" className="img" />
                  <img src={likeIcon} alt="" className="like" />
                </div>
                <div className="promotionItemPrice">
                  <div className="newPrice">
                    <span>{item.price} ₽</span>
                  </div>
                </div>
                <div className="promotionItemName">{item.description}</div>
                <div className="promotionItemRanking">
                  <img src={starRanking} alt="" />
                  <img src={starRanking} alt="" />
                  <img src={starRanking} alt="" />
                  <img src={starRanking} alt="" />
                  <img src={starRanking} alt="" />
                </div>
                <div className="addToBasket" onClick={() => addToBasket(item)}>
                  В корзину
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stocks;
