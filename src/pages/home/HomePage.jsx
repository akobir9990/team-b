import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Item from "../../components/item/item";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="container"><Item /> </div>
      
      <Footer />
    </div>
  );
}

export default HomePage;
