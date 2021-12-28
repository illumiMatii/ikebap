import "../styles/signin.scss";
import ProceedButton from "./ProceedButton";
import MaterialForm from "./MaterialForm";

const Signin = () => {
  return (
    <div className="signin">
      <div className="signin-container">
        <h2>Get In!</h2>
        <div className="signin__form">
          <MaterialForm>
            <ProceedButton />
          </MaterialForm>
        </div>
      </div>
    </div>
  );
};

export default Signin;
