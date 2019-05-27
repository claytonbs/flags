import React from "react";
import "./Spinner.scss";

const Spinner = props => {
  return (
    <div className="spinner">
      <div className="spinner-container" />;
      <p className="spinner-caption">{props.message}</p>
    </div>
  );
};
export default Spinner;

Spinner.defaultProps = {
  message: "Loading..."
};
