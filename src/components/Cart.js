import { Link } from "react-router-dom";
import "../styles/cart.scss";

const Cart = (props) => {
  const cartItems = props.productItems;

  //TODO: Change variable price to something else... works for now but it looks awful.

  let priceTotal = 0;

  let price = cartItems.map(item => {
    let total = 0;
    return total += item.price;
  });

  return (
    <div className="cart__container">
      <div className="container__content">
        <h1>My order</h1>
        {cartItems.length === 0 && 
        <div className="content__empty">
          <h2>Your cart is empty</h2>
        </div>}
        {cartItems.map(item => {
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
          {cartItems !== 0 ?
          <h2>{priceTotal}zł</h2> 
          :
          <h2>0.00zł</h2>
          }
          <Link to="/checkout" className="btn__checkout">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
