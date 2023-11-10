import Header from "../../components/header/Header";
import { useGlobalContext } from "../../context";
import rasm from "../../assets/images/stati-img.png";
import "./allarticles.css";

function AllPages() {
  const { statiArr } = useGlobalContext();
  return (
    <div>
      <Header />
      <div className="container stati-container">
        <h1 className="statiTitle">All articles</h1>
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
    </div>
  );
}

export default AllPages;
