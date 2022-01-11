import { useState } from "react";
import "../styles/materialform.scss";

const MaterialForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
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
        <div>{props.children}</div>
      </form>
    </>
  );
};

export default MaterialForm;
