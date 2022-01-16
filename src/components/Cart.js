import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/cart.scss";

const Cart = (props) => {
  const cartItems = props.productItems;

  let totalPrice = cartItems.reduce((prevItem, currentItem) => {
    return prevItem + currentItem.price;
  }, 0);

  const onPriceChange = () => {
    props.onPriceChange(totalPrice);
  };

  useEffect(() => {
    onPriceChange();
  });

  return (
    <div className="cart__container">
      <div className="container__content">
        <h1>My order</h1>
        {cartItems.length === 0 && (
          <div className="content__empty">
            <h2>Your cart is empty</h2>
          </div>
        )}
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="content__orders">
              <div className="orders__item">
                <p>{item.name}</p>
                <p>{item.price}zł</p>
              </div>
            </div>
          );
        })}
        <div className="content__total">
          <h2>{totalPrice}zł</h2>
          <Link to="/checkout" className="btn__checkout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
