import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import PromocionApp from "./components/PromocionApp";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path={"/"} element={<ItemListContainer />} />
          <Route exact path={"/category/:id"} element={<ItemListContainer />} />
          <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route exact path={"*"} element={<Error404 />} />
        </Routes>
        <PromocionApp />
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
