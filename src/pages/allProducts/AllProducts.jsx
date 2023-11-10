import { useGlobalContext } from "../../context";
import "../../components/item/item.css";
import likeIcon from "../../assets/images/likeIcon.svg";
import starRanking from "../../assets/images/star_ranking.svg";
import "../../components/stocks/stocks.css";

function AllProducts() {
  const { products, addToBasket } = useGlobalContext();
  console.log("products => ", products);
  return (
    <div className="container">
      <h1 className="allProductsTitle">All Products</h1>
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

export default AllProducts;
