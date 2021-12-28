import { Link } from "react-router-dom";
import "../styles/checkout.scss";

const Checkout = () => {
    return (
        <div className="checkout__main">
            <div className="main__info">
                <h2>Your order has been proceed!</h2>
                <p>You can check our other iKebaps in Menu</p>
                <Link to="/" className="info__link">Back to home</Link>
            </div>
        </div>
    );
}

export default Checkout;