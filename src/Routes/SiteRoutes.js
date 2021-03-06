import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import { useState } from "react";
import Checkout from "../components/Checkout";
import About from "../components/About";

const SiteRoutes = (props) => {
  const [orderItems, setOrderItems] = useState(props.orderItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const [username, setUsername] = useState();

  const onAddOrder = (order) => {
    props.onAddOrder(order);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home onAddOrder={onAddOrder} orders={props.orders} />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/signin"
        element={
          <Signin
            onUserLogIn={props.onUserLogIn}
            onUserIsLogged={props.onUserIsLogged}
          />
        }
      />
      <Route
        path="/menu"
        element={<Menu onAddOrder={onAddOrder} orders={props.orders} />}
      />
      <Route
        path="/cart"
        element={
          <Cart
            onAddOrder={onAddOrder}
            onPriceChange={props.onPriceChange}
            orderItems={props.orderItems}
          />
        }
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default SiteRoutes;
