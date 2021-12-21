import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import Header from "./Components/Header";
import Notfound from "./Components/Notfound";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/products" exact component={Products} />
              <Route path="/products/:id" exact component={ProductDetail} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
