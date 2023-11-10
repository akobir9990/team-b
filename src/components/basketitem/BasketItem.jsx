import "./basketitem.css";
// import itemImg from "../../assets/images/basket-item-img.png";

const Basketitem = () => {
  return (
    <div className="basket-item__div">
      <img src="" alt="" />
      <h2 className="basket-item__text">
        Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
      </h2>
      <h3 className="basket-item__text2">44,50 ₽</h3>
      <div className="basket-item__div2">
        <button className="basket-item__button">-</button>
        <div className="raqam">2</div>
        <button className="basket-item__button2">+</button>
        <h2 className="basket-item__text3">89,00 ₽</h2>
      </div>
    </div>
  );
};

export default Basketitem;
