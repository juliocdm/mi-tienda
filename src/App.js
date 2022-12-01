import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import PromocionApp from "./components/PromocionApp";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"¡No se encontraron productos!"} />
      <PromocionApp />
      <Footer />
    </div>

  );
}

export default App;
