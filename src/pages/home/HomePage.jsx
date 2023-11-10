// import { Navigate } from "react-router-dom";
import Navigate from "../../components/Navigate/Navigate";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Stocks from "../../components/stocks/Stocks";

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
        <Navigate />
      </div>
      <Footer />
    </div>
  ); 
}

export default HomePage;
