import "../styles/homemenu.scss";
import Kebab from "../img/Kebab1.png";

const HomeMenu = () => {
  return (
    <div className="home__menu-main">
      <div className="menu-main">
        <div className="menu-main__arrows">
          <p>1/9</p>
          <div className="arrows__container">
            <button className="button">Prev</button>
            <button className="button">Next</button>
          </div>
        </div>
      </div>
      <div className="menu-main__content">
        <div className="content__img-container">
          <img src={Kebab} />
          <h1>iKebap Pro Max Super</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor incididunt ut labore et
          </p>
          <div className="container__add-product">
            <button className="button">Take It!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
