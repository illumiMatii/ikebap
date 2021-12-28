import "../styles/homeinfo.scss";
import CityImage from "../img/city.png";
import { Link } from "react-router-dom";

const HomeInfo = () => {
  return (
    <div className="info__container">
      <div className="container__title">
        <h1>
          iKebap - the best turkish <br /> restaurant in Wrocław
        </h1>
      </div>
      <img src={CityImage} />
      <div className="container__about">
        <p>
          Lorem Ipsum dolor sit amet, consectetur - <br /> adipiscing elit, sed
          do euismod tempor incididunt
        </p>
      </div>
      <div className="container__link">
        <Link to="/menu" className="link__link">
          View menu
        </Link>
      </div>
    </div>
  );
};

export default HomeInfo;
