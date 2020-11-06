import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Toolbar from "./components/Toolbar/Toolbar";
import ProductPage from "./components/Toolbar/ProductPage";
import CartPage from "./components/Toolbar/CartPage";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route exact path="/mycart" component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;
