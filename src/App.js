import "./scss/app.scss";
import { Header } from "./components";
import logo from "./img/pizza-logo.svg";
import { Cart, Home } from "./pages";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setPizzas(data.pizzas);
    });
  });
  return (
    <div className="wrapper">
      <Header logo={logo} />
      <Route path={"/"} render={() => <Home items={pizzas} />} exact />
      <Route path={"/cart"} render={() => <Cart />} exact />
    </div>
  );
}

export default App;
