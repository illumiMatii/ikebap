import "../styles/header.scss";
import Logo from "../img/doner-kebab.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  let username = props.username;

  //TODO: if props.isUserLoggedIn false then do not show the user div
  const onUserLogOut = () => {
    props.onUserLogOut(false);
  };

  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img className="logo__img" src={Logo} />
        <h3>iKebap</h3>
      </Link>
      <div className="header__content">
        <Link to="/about" className="content__link">
          About
        </Link>
        <Link to="/menu" className="content__link">
          Menu
        </Link>
        {props.isUserLoggedIn === false ? (
          <Link to="/signin" className="content__link">
            Log in
          </Link>
        ) : (
          ""
        )}
        {props.isUserLoggedIn === true ? (
          <div className="content__user">
            <Link to="/" className="content__link">
              Logged as: {username}
            </Link>
            <button onClick={onUserLogOut}>Logout</button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="header__basket">
        <Link to="/cart" className="basket__link">
          Cart
        </Link>
        <p>{props.totalPrice}zł</p>
      </div>
    </div>
  );
};

export default Header;
