import "./styles.css";

const Product = ({ img, name, category, price, handleClick, newId }) => {
  return (
    <>
      <div className="vitrine-div-image">
        <img src={img} alt="Comida fast food" />
      </div>
      <h3>{name}</h3>
      <h5>{category}</h5>
      <span>R$ {price}</span>
      <button onClick={() => handleClick(newId)}>Adicionar</button>
    </>
  );
};
export { Product };
