import { useState } from "react";
import "../styles/signin.scss";
import ProceedButton from "./ProceedButton";

const Signin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onProceedButton = () => {
    props.onUserLogIn(username);
  };

  return (
    <div className="signin">
      <div className="signin-container" onSubmit={onFormSubmitHandler}>
        <h2>Get In!</h2>
        <form className="signin__form">
          <input
            className="form-input"
            onChange={usernameChangeHandler}
            type="text"
            required
          />
          <label>Username</label>
          <input
            className="form-input"
            onChange={passwordChangeHandler}
            type="password"
            required
          />
          <label>Password</label>
          <ProceedButton onProceedButton={onProceedButton} />
        </form>
      </div>
    </div>
  );
};

export default Signin;
