import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import Item from "../../components/item/item";

import Stati from "../../components/stati/stati";


function HomePage() {
  return (
    <div>
      <Header />
      <div className="container">
    <Item />
        <Stati />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
