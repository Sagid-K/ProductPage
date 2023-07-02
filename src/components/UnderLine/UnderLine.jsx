/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const UnderLine = ({
  className,
  lineClassName,
  line = "https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/line-1-9.svg",
}) => {
  return (
    <div className={`under-line ${className}`}>
      <img className={`line-2 ${lineClassName}`} alt="Line" src={line} />
    </div>
  );
};

UnderLine.propTypes = {
  line: PropTypes.string,
};
