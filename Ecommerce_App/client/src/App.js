import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main'
import ShoppingCart from './views/ShoppingCart'
import CreateProduct from './views/CreateProduct'
import AddProduct from './views/AddProduct'
import Show from './views/Show'
import Dashboard from './views/Dashboard'
import ProductInfo from './views/ProductInfo'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
      <Main/>
      </Route>
      <Route path="/shoppingcart">
          <ShoppingCart />
        </Route>
        <Route path="/createproduct">
          <CreateProduct />
        </Route>
        <Route path="/addproduct">
          <AddProduct />
        </Route>
        <Route path="/show">
          <Show />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/productinfo">
          <ProductInfo />
        </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
