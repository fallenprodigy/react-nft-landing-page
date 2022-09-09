import React from "react";
import "./button.css";

const Button = (props) => {
  const { btnType, btnText, btnOnClick, customClass } = props;
  return (
    <div
      onClick={btnOnClick}
      className={`${
        btnType === "PRIMARY"
          ? `button primary-btn ${customClass}`
          : `button secondary-btn ${customClass}`
      }`}
    >
      {btnText}
    </div>
  );
};

export default Button;
