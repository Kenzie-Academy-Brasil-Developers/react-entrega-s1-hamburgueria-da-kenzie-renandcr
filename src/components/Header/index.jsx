import "./styles.css";
import { useState } from "react";
const Header = ({ logoImg, showProducts }) => {
  const [input, setInput] = useState("");

  return (
    <header className="header-header">
      <div className="header-div-logo">
        <img src={logoImg} alt="" />
      </div>
      <div className="header-div-input">
        <input
          type="text"
          placeholder="Digitar pesquisa"
          className="input-search"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button onClick={() => showProducts(input)}>Pesquisar</button>
      </div>
    </header>
  );
};
export { Header };
