import "../styles/menu.scss";
import Card from "./Card";
import { useState, useEffect } from "react";

const Menu = (props) => {
  // TODO: Make map wrap to create rows with objects of list.
  const [orders, onAddOrder] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await fetch("/menu/items");
    const data = await response.json();
    setMenuItems(data);
  };

  return (
    <div className="menu">
      <div className="menu-main__container">
        <article>
          <Card onAddOrder={props.onAddOrder} order={menuItems[0]} />
          <Card onAddOrder={props.onAddOrder} order={menuItems[1]} />
          <Card onAddOrder={props.onAddOrder} order={menuItems[2]} />
        </article>
        <article>
          <Card onAddOrder={props.onAddOrder} order={menuItems[3]} />
          <Card onAddOrder={props.onAddOrder} order={menuItems[4]} />
          <Card onAddOrder={props.onAddOrder} order={menuItems[5]} />
        </article>
        <article>
          <Card onAddOrder={props.onAddOrder} order={menuItems[6]} />
          <Card onAddOrder={props.onAddOrder} order={menuItems[7]} />
          <Card onAddOrder={props.onAddOrder} order={menuItems[8]} />
        </article>
      </div>
    </div>
  );
};

export default Menu;
