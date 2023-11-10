import "./item.css";
import itemImg from "../../assets/images/promotionItemImg.png";
import likeIcon from "../../assets/images/likeIcon.svg";
import starRanking from "../../assets/images/star_ranking.svg";

function Item(data) {
  return (
    <div className="promotion">
      <div className="promotionsItemImages">
        <img src={itemImg} alt="" className="img" />
        <img src={likeIcon} alt="" className="like" />
        <span className="stocksPersent">-50%</span>
      </div>
      <div className="promotionItemPrice">
        <div className="newPrice">
          <span>44,50 ₽</span>
          <p>С картой</p>
        </div>
        <div className="oldPrice">
          <span>50,50 ₽</span>
          <p>Обычная</p>
        </div>
      </div>
      <div className="promotionItemName">Г/Ц Блинчики с мясом вес, Россия</div>
      <div className="promotionItemRanking">
        <img src={starRanking} alt="" />
        <img src={starRanking} alt="" />
        <img src={starRanking} alt="" />
        <img src={starRanking} alt="" />
        <img src={starRanking} alt="" />
      </div>
      <div className="addToBasket">В корзину</div>
    </div>
  );
}

export default Item;
