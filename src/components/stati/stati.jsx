import rasm from "../../assets/images/stati-img.png";
import arrRight from "../../assets/images/arrowRight.svg";

import "./stati.css";

import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";

const Stati = () => {
  const { statiArr } = useGlobalContext();
  return (
    <div className="stati-container">
      <h1 className="statiTitle">
        Статьи
        <NavLink to="allarticles">
          <button className="button">
            Все статьи <img src={arrRight} alt="" />
          </button>
        </NavLink>
      </h1>
      {statiArr.map((item) => {
        return (
          <div key={item.id} className="stati">
            <div className="stati-img">
              <img src={rasm} alt="stati-img" />
            </div>
            <div className="stati-texts">
              <p className="stati-text">{item.date}</p>
              <h2 className="stati-text-2">{item.name} </h2>
              <p className="stati-text-3">{item.desc}</p>
              <button className="button">Подробнее</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stati;
