import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import { useState } from "react";
import Card from "../components/Card";
import Checkout from "../components/Checkout";
import About from "../components/About";

const SiteRoutes = (props) => {
  const [orderItems, setOrderItems] = useState([]);

  const onAddOrder = (order) => {
    setOrderItems([...orderItems, order]);
    console.log(order);
  };

  return (
    <Routes>
      <Route exact path="/" element={<Home orders={props.orders} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/menu"
        element={<Menu onAddOrder={onAddOrder} orders={props.orders} />}
      />
      <Route
        path="/cart"
        element={<Cart onAddOrder={onAddOrder} productItems={orderItems} />}
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default SiteRoutes;
