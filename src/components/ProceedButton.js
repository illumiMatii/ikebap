import "../styles/proceedbutton.scss";

const ProceedButton = (props) => {
  return (
    <input
      className="btn-grad"
      type="submit"
      value="Get In"
      onClick={props.onProceedButton}
    />
  );
};

export default ProceedButton;
