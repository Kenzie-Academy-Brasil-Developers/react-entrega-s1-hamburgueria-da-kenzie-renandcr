import "./App.css";
import "./assets/cssReset/reset.css";
import logoImg from "../src/assets/img/logo.svg";
import { useEffect, useState } from "react";
import { ProductList, ProductCart } from "./components/ProductList";
import { Header } from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  const showProducts = (item) => {
    const filter = products.filter(
      (current) => current.category.toLowerCase() === item.toLowerCase()
    );
    filter.length > 0
      ? setFilteredProducts(filter)
      : alert("Digite algo válido no campo de busca");
  };

  const handleClick = (newId) => {
    const findItem = products.find((current) => current.id === newId);
    const findItemCart = currentSale.find((current) => current.id === newId);
    !findItemCart
      ? setCurrentSale([...currentSale, findItem])
      : alert("Este item já está incluso no carrinho.");
  };

  const removeItems = (item) => {
    const find = currentSale.find((current) => current.id === item.id);
    currentSale.splice(currentSale.indexOf(find), 1);
    setCurrentSale([...currentSale]);
  };

  const removeEverything = () => {
    currentSale.splice(0, currentSale.length);
    setCurrentSale([...currentSale]);
  };

  const totalPrice = currentSale.reduce(
    (acc, current) => acc + current.price,
    0
  );

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  return (
    <>
      <Header
        logoImg={logoImg}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        showProducts={showProducts}
      />
      <main className="vitrine-main">
        <ProductList
          products={products}
          handleClick={handleClick}
          filteredProducts={filteredProducts}
        />

        <ProductCart
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          removeItems={removeItems}
          removeEverything={removeEverything}
          totalPrice={totalPrice}
        />
      </main>
    </>
  );
}

export default App;
