import React from "react";
import "./Btn.scss";
import PropTypes from "prop-types";

const Btn = ({ className, onClick, children, ...props }) => {
  return (
    <button className={`btn ${className ? className : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

Btn.propTypes = {
  onClick: PropTypes.func,
};

export default Btn;
