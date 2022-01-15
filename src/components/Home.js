import HomeInfo from "./HomeInfo";
import HomeMenu from "./HomeMenu";
import "../styles/home.css";

const Home = (props) => {
  return (
    <>
      <div className="home__component">
        <HomeInfo />
        <HomeMenu orders={props.orders} />
      </div>
    </>
  );
};

export default Home;
