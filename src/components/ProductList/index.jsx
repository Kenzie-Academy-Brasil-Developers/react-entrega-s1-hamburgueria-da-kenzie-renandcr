import { Product } from "../Product";
import { Cart } from "../Cart";

const ProductList = ({ products, handleClick, filteredProducts }) => {
  return (
    <section className="vitrine-section-card">
      <ul className="vitrine-ul">
        {filteredProducts.length > 0
          ? filteredProducts.map((current) => (
              <li className="vitrine-li-card" key={current.id}>
                <Product
                  img={current.img}
                  name={current.name}
                  category={current.category}
                  price={current.price}
                  handleClick={handleClick}
                  newId={current.id}
                />
              </li>
            ))
          : products.map((current) => (
              <li className="vitrine-li-card" key={current.id}>
                <Product
                  img={current.img}
                  name={current.name}
                  category={current.category}
                  price={current.price}
                  handleClick={handleClick}
                  newId={current.id}
                />
              </li>
            ))}
      </ul>
    </section>
  );
};
const ProductCart = ({
  currentSale,
  removeItems,
  removeEverything,
  totalPrice,
}) => {
  return (
    <div className="cart-div-parent">
      <section className="cart-section">
        <div className="title-div">
          <h3>Carrinho de compras</h3>
        </div>
        {currentSale.length === 0 && (
          <div className="itens-div">
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
          </div>
        )}
        <ul className="cart-ul">
          {currentSale.map((current, index) => (
            <li key={index}>
              <Cart
                currentItem={current}
                img={current.img}
                name={current.name}
                category={current.category}
                currentSale={currentSale}
                removeItems={removeItems}
              />
            </li>
          ))}
        </ul>
        {currentSale.length > 0 && (
          <div className="total-div-parent">
            <div className="total-div-total-price">
              <h3>Total</h3>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <button onClick={removeEverything}>Remover todos</button>
          </div>
        )}
      </section>
    </div>
  );
};

export { ProductList, ProductCart };
