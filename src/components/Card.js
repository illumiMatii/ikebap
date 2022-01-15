import "../styles/card.scss";
import KebapImg from "../img/Kebab1.png";
import { useState } from "react";

const Card = (props) => {
  const [order, onAdd] = useState(props.order);

  const onAddOrderHandler = () => {
    props.onAddOrder(order);
  };

  return (
    <div className="container__order">
      <div className="order__details">
        <img src={KebapImg} className="details__img" />
        <h3>{props.order.name}</h3>
        <p>{props.order.desc}</p>
        <div className="details__price-buy">
          <h1>{props.order.price}zł</h1>
          <input
            type="submit"
            value="Take it!"
            onClick={onAddOrderHandler}
            className="price-buy__btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
