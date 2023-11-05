import rasm from '../../assets/images/stati-img.png'

import "./stati.css"

const Stati = () => {
  return (
    <div className="stati">
      <div className="stati-img">
        <img src={rasm} alt="stati-img" />
      </div>
      <div className="stati-texts">
        <p className='stati-text'>05.03.2021</p>
        <h2 className='stati-text-2'>Режим использования масок и перчаток на территории магазинов</h2>
        <p className='stati-text-3'>Подробная информация о режимах <br /> использования масок и перчаток на <br /> территории магазинов "ЛЕНТА". Информация <br /> обновляется каждый будний день.</p>
        <button className="button">Подробнее</button>
      </div>
    </div>
  )
}

export default Stati