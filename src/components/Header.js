import "../styles/header.scss";
import Logo from "../img/doner-kebab.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  let price = 0;

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
        <Link to="/signin" className="content__link">
          Log in
        </Link>
      </div>
      <div className="header__basket">
        <Link to="/cart" className="basket__link">
          Cart
        </Link>
        <p>{price}zł</p>
      </div>
    </div>
  );
};

export default Header;
