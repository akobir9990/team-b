import "./item.css"
import promotionItemImg from "../../assets/images/promotionItemImg.png"

function Item() {
  return (
    <div>
 <div className="card">
<img className="" src={promotionItemImg} alt="" /><p className='card-price'>599,99$</p>
<p className='card-name'>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
<img className='card-rating' src="src/copmanent/Header/img/rating (1).png" alt="" />
<button className='card-but'>В корзину</button>
</div>

    </div>
  )
}

export default Item

