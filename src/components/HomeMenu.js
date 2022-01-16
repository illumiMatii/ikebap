import "../styles/homemenu.scss";
import Kebab from "../img/Kebab1.png";
import HomeMenuItem from "./HomeMenuItem";
import { useState } from "react";

const HomeMenu = (props) => {
  const [itemId, setItemId] = useState(0);

  const onPrevButton = () => {
    if (itemId <= 0) {
      setItemId(0);
    } else {
      setItemId(itemId - 1);
    }
  };

  const onNextButton = () => {
    console.log(itemId);
    if (itemId >= 8) {
      setItemId(8);
    } else {
      setItemId(itemId + 1);
    }
  };

  return (
    <div className="home__menu-main">
      <div className="menu-main">
        <div className="menu-main__arrows">
          <p>
            {itemId + 1}/{props.orders.length}
          </p>
          <div className="arrows__container">
            <button className="button" onClick={onPrevButton}>
              Prev
            </button>
            <button className="button" onClick={onNextButton}>
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="menu-main__content">
        <HomeMenuItem
          order={props.orders[itemId]}
          img={Kebab}
          onAddOrder={props.onAddOrder}
        />
      </div>
    </div>
  );
};

export default HomeMenu;
