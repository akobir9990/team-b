import Header from "../../components/header/Header";
import "../../components/basketitem/basketItem.css";
import { useGlobalContext } from "../../context";

function Basket() {
  const { basket, setBasket } = useGlobalContext();

  console.log("basket => ", basket);

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="basketItemTitle">Корзина</h1>
        {basket.map((item) => {
          return (
            <div className="basketItem" key={item.id}>
              <div className="basketItemImg">
                <img src={item.images[1]} alt="" />
              </div>
              <div className="basketItemTexts">
                <h2 className="basketItemName">{item.title}</h2>
                <h3 className="basketItemPrice">{item.price} ₽</h3>
              </div>
              <div className="basketItemCounter">
                <button className="inc">-</button>
                <div className="count">2</div>
                <button className="dec">+</button>
              </div>
              <div className="basketItemsTotalPrice">
                89,00 ₽
                <button
                  className="delBTN"
                  onClick={() => {
                    setBasket((prev) => {
                      localStorage.setItem(
                        "basket",
                        JSON.stringify(
                          prev.filter((basketItem) => basketItem.id !== item.id)
                        )
                      );
                      return prev.filter(
                        (basketItem) => basketItem.id !== item.id
                      );
                    });
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Basket;
