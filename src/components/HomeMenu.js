import "../styles/homemenu.scss";
import Kebab from "../img/Kebab1.png";
import HomeMenuItem from "./HomeMenuItem";
import { useState } from "react";

const HomeMenu = (props) => {
  const [item_id, setItemId] = useState(0);

  const onPrevButton = () => {
    if (item_id <= 0) {
      setItemId(0);
    } else {
      setItemId(item_id - 1);
    }
  };

  const onNextButton = () => {
    console.log(item_id);
    if (item_id >= 8) {
      setItemId(8);
    } else {
      setItemId(item_id + 1);
    }
  };

  return (
    <div className="home__menu-main">
      <div className="menu-main">
        <div className="menu-main__arrows">
          <p>
            {item_id + 1}/{props.orders.length}
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
          order={props.orders[item_id]}
          img={Kebab}
          onAddOrder={props.onAddOrder}
        />
      </div>
    </div>
  );
};

export default HomeMenu;
