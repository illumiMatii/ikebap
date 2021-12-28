import "../styles/menu.scss";
import Card from "./Card";
import { useState } from "react";

const Menu = (props) => {
  // TODO: Make map wrap to create rows with objects of list.
  const [orders, onAddOrder] = useState(props.orders);

  return (
    <div className="menu">
      <div className="menu-main__container">
        <article>
          <Card onAddOrder={props.onAddOrder} order={orders[0]} />
          <Card onAddOrder={props.onAddOrder} order={orders[1]} />
          <Card onAddOrder={props.onAddOrder} order={orders[2]} />
        </article>
        <article>
          <Card onAddOrder={props.onAddOrder} order={orders[3]} />
          <Card onAddOrder={props.onAddOrder} order={orders[4]} />
          <Card onAddOrder={props.onAddOrder} order={orders[5]} />
        </article>
        <article>
          <Card onAddOrder={props.onAddOrder} order={orders[6]} />
          <Card onAddOrder={props.onAddOrder} order={orders[7]} />
          <Card onAddOrder={props.onAddOrder} order={orders[8]} />
        </article>
      </div>
    </div>
  );
};

export default Menu;
