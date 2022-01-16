import { useState, useEffect } from "react";

const HomeMenuItem = (props) => {
  const [order, setOrder] = useState(props.order);

  useEffect(() => {
    setOrder(props.order);
  });

  const onAddOrderHandler = () => {
    props.onAddOrder(order);
  };

  return (
    <div className="content__img-container">
      <img src={props.img} />
      <h1>{props.order.name}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing <br />
        elit, sed do eiusmod tempor incididunt ut labore et
      </p>
      <div className="container__add-product">
        <h3>{props.order.price}zł</h3>
        <button className="button" onClick={onAddOrderHandler}>
          Take It!
        </button>
      </div>
    </div>
  );
};

export default HomeMenuItem;
