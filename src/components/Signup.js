import "../styles/signup.scss";
import ProceedButton from "./ProceedButton";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h2>Create an account!</h2>
        <form className="signup__form" onSubmit={formSubmitHandler}>
          <input
            className="form-input"
            onChange={usernameChangeHandler}
            type="text"
            required
          />
          <label>Username</label>
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

export default Signup;
