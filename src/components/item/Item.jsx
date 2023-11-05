import "./item.css"
import promotionItemImg from "../../assets/images/promotionItemImg.png"
import promotionrating from "../../../src/assets/images/promotionrating.png"
function Item() {
  return (
    <div>
 <div className="promotion">
<img className="promotion-img" src={promotionItemImg} alt="" /><p className='card-price'>44,50₽ 50,50₽ </p>

<p className='promotion-name'>Г/Ц Блинчики с мясом вес, Россия</p>
<img className='promotion-rating' src={promotionrating} alt="" />
<button className='promotion-but'>В корзину</button>
</div>

    </div>
  )
}

export default Item

