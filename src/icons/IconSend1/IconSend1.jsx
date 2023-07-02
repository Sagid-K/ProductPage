/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconSend1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`icon-send-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.91245 12H4.00045L2.02345 4.13505C2.01079 4.08934 2.00308 4.0424 2.00045 3.99505C1.97845 3.27405 2.77245 2.77405 3.46045 3.10405L22.0004 12L3.46045 20.896C2.78045 21.223 1.99645 20.737 2.00045 20.029C2.00247 19.9658 2.01359 19.9031 2.03345 19.843L3.50045 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconSend1.propTypes = {
  color: PropTypes.string,
};
