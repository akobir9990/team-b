// import { Navigate } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Stocks from "../../components/stocks/Stocks";
import Stati from "../../components/stati/stati";
import Map from "../../components/map/Map";

function HomePage(getLSBasket, basket, setBasket) {
  return (
    <div>
      <Header />
      <div className="container">
        <Stocks
          getLSBasket={getLSBasket}
          basket={basket}
          setBasket={setBasket}
        />
        <Stati />
        <Map />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
