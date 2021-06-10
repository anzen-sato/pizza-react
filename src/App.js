import "./scss/app.scss";
import { Header } from "./components";
import logo from "./img/pizza-logo.svg";
import { Cart, Home } from "./pages";
import { Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div className="wrapper">
      <Header logo={logo} />
      <Route path={"/"} component={Home} exact />
      <Route path={"/cart"} component={Cart} exact />
    </div>
  );
}

export default App;
