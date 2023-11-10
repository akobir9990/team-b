import './catalog.css';
import Cucumber from '../catalog/img/zavtrak.png'
import Non from '../catalog/img/non.png'
import Vegetables from '../catalog/img/vegetable.png'
import Fruits from '../catalog/img/fruit.png'
import Water from '../catalog/img/mineral.png'
import Lollipops from '../catalog/img/lollipop.png'
import Tea from '../catalog/img/tea.png'
import Lagmon from '../catalog/img/lagmon.png'
import Meat from '../catalog/img/meat.png'
import Pets from '../catalog/img/pets.png'
import Baby from '../catalog/img/baby.png'
import Kolbasa from '../catalog/img/kolbasa.png'
import Img from '../catalog/img/img.png'





export default function Catalog() {
  return (
    <div className="Catalog">
      <h1 className="title">Каталог</h1>
      <table >
        <tr className='tr'>
          <td className='td' colspan='2'>
              <img src={Cucumber} alt="" className='img img2'/>
              <p className="text">Молоко, сыр, яйцо</p>
          </td>
          
          <td className='td1'>
            <img src={Non} alt="" className='img'/>
            <p className="text">Хлеб</p>
          </td>
          <td className='td1 '>
            <img src={Vegetables} alt="" className='img'/>
            <p className="text">Фрукты и овощи</p>
          </td>
        </tr>
        <tr className='tr1'>
          <td className='td2'>
            <img src={Fruits} alt="" className='img'/>
            <p className="text">Замороженные продукты</p>
          </td>
          <td className='td3'>
            <img src={Water} alt="" className='img' />
            <p className="text">Напитки</p>
          </td>
          <td className='td3'>
             <img src={Lollipops} alt="" className='img'/>
             <p className="text">Кондитерские изделия</p>
          </td>
          <td className='td3 td5'>
            <img src={Tea} alt="" className='img'/>
            <p className="text">Чай, кофе</p>
          </td>
        </tr>
        <tr className='tr2'>     
          <td className='td'>
            <img src={Lagmon} alt="" className='img'/>
            <p className="text">Бакалея</p>
          </td>
          <td className='td td3'>
            <img src={Meat} alt="" className='img'/>
            <p className="text">Здоровое питание</p>
          </td>
          <td className='td td4' colspan='2'>
              <img src={Pets} alt="" className='img img2'  />
              <p className="text">Зоотовары</p>
          </td>
        </tr>
        <tr className='tr3'>
        <td className='td'>
            <img src={Baby} alt="" className='img'/>
            <p className="text">Детское питание</p>
          </td>
          <td className='td td3' colspan='2'>
              <img src={Kolbasa} alt="" className='img img2'/>
              <p className="text">Мясо, птица, колбаса</p>
          </td>
          <td className='td td3'>
            <img src={Img} alt="" className='img'/>
            <p className="text">Непродовольственные товары</p>
          </td>
          
        </tr>
      </table>
    </div>
  )
}
