import "./styles.css";

const Cart = ({
  currentSale,
  img,
  name,
  category,
  removeItems,
  currentItem,
}) => {
  return (
    <>
      {currentSale.length > 0 ? (
        <div className="itemsAdd-div">
          <div className="itemsAdd-div-image">
            <img src={img} alt="Comida Fast Food" />
          </div>
          <div className="itemsAdd-div-name">
            <h3>{name}</h3>
            <h5>{category}</h5>
          </div>
          <div className="itemsAdd-div-remove">
            <span onClick={() => removeItems(currentItem)}>Remover</span>
          </div>
        </div>
      ) : (
        <div className="itens-div">
          <h3>Sua sacola está vazia</h3>
          <span>Adicione itens</span>
        </div>
      )}
    </>
  );
};

export { Cart };
