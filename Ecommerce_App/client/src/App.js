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
import Login from './views/Login'
import Registration from './views/Registration'
import Profile from './views/Profile'
import './App.css';
// import './static/css/LoginRegistration.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Registration/>
        </Route>
        <Route path="/profile">
          <Profile/>
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
        <Route exact path="/">
      <Main/>
      </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
