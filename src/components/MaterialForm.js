import "../styles/materialform.scss";

const MaterialForm = (props) => {
  return (
    <>
      <div className="signin__form">
        <input className="form-input" type="email" required />
        <label>Email</label>
        <input className="form-input" type="password" required />
        <label>Password</label>
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default MaterialForm;
