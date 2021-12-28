import "../styles/signup.scss";
import ProceedButton from "./ProceedButton";
import MaterialForm from "./MaterialForm";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <h2>Create an account!</h2>
        <div className="signup__form">
          <input className="form-input" type="text" required />
          <label>Username</label>
          <MaterialForm>
            <ProceedButton />
          </MaterialForm>
        </div>
      </div>
    </div>
  );
};

export default Signup;
