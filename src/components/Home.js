import HomeInfo from "./HomeInfo";
import HomeMenu from "./HomeMenu";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="home__component">
        <HomeInfo />
        <HomeMenu />
      </div>
    </>
  );
};

export default Home;
