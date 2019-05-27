import React from "react";
import "./Btn.scss";

const Btn = props => {
  const getAlignment = () => {
    return props.align ? props.align : null;
  };
  return (
    <button
      onClick={props.onClick}
      className={`btn-primary ${getAlignment()}`}
      disabled={props.disabled}
    >
      {props.content}
    </button>
  );
};

export default Btn;

Btn.defaultProps = {
  disabled: false
};
