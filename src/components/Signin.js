import { useState } from "react";
import "../styles/signin.scss";
import ProceedButton from "./ProceedButton";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signin">
      <div className="signin-container" onSubmit={onFormSubmitHandler}>
        <h2>Get In!</h2>
        <form className="signin__form">
          <input
            className="form-input"
            onChange={emailChangeHandler}
            type="email"
            required
          />
          <label>Email</label>
          <input
            className="form-input"
            onChange={passwordChangeHandler}
            type="password"
            required
          />
          <label>Password</label>
          <ProceedButton />
        </form>
      </div>
    </div>
  );
};

export default Signin;
