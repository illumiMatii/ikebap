import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteRoutes from "./Routes/SiteRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  let orders = [
    {
      id: 1,
      name: "iKebap Pro Max Super",
      price: 22.50,
      desc: "Lorem Ipsum dolor sit amet, consectetur adipsicing elit",
      quantity: 1,
    },
    {
      id: 2,
      name: "iKebap Pro Max",
      price: 21,
      desc: "Lorem Ipsum dolor sit amet, consectetur adipsicing elit",
      quantity: 1,
    },
    {
      id: 3,
      name: "iKebap Classic",
      price: 15,
      desc: "Lorem Ipsum dolor sit amet, consectetur adipsicing elit",
      quantity: 1,
    },
    {
      id: 4,
      name: "iKebap California Reeper",
      price: 18,
      desc: "Lorem Ipsum dolor sit amet, consectetur adipsicing elit",
      quantity: 1,
    },
    {
      id: 5,
      name: "iKebap Overpriced",
      price: 37,
      desc: "Lorem Ipsum dolor sit amet, consectetur adipsicing elit",
      quantity: 1,
    },
    {
      id: 6,
      name: "iKebap Small",
      price: 10,
      desc: "Lorem Ipsum dolor sit amet, consectetur adipsicing elit",
      quantity: 1,
    },
    {
      id: 7,
      name: "iKebap Wege",
      price: 17,
      desc: "Lorem Ipsum dolor sit amet, consectetur adipsicing elit",
      quantity: 1,
    },
    {
      id: 8,
      name: "iKebap American",
      price: 16.50,
      desc: "Lorem Ipsum dolor sit amet, consectetur adipsicing elit",
      quantity: 1,
    },
    {
      id: 9,
      name: "iKebap po góralsku",
      price: 17,
      desc: "Lorem Ipsum dolor sit amet, consectetur adipsicing elit",
      quantity: 1,
    },
  ];

  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SiteRoutes orders={orders}/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
