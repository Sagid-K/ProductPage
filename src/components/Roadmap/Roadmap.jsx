/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Roadmap = ({
  className,
  line = "https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/line-13-1.svg",
  nothingClassName,
  text = "Nothing",
  hasLine = true,
  hasNothing = true,
  hasImg = true,
  hasDiv = true,
  img = "https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/line-13-1.svg",
}) => {
  return (
    <div className={`roadmap ${className}`}>
      <div className="account">Account</div>
      <img className="img" alt="Line" src={line} />
      <div className={`nothing ${nothingClassName}`}>{text}</div>
      {hasLine && (
        <img
          className="img"
          alt="Line"
          src="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/line-13-1.svg"
        />
      )}

      {hasNothing && <div className="nothing">{text}</div>}

      {hasImg && (
        <img
          className="img"
          alt="Line"
          src="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/line-13-1.svg"
        />
      )}

      {hasDiv && <div className="nothing">{text}</div>}

      <img className="img" alt="Line" src={img} />
      <div className="nothing">{text}</div>
    </div>
  );
};

Roadmap.propTypes = {
  line: PropTypes.string,
  text: PropTypes.string,
  hasLine: PropTypes.bool,
  hasNothing: PropTypes.bool,
  hasImg: PropTypes.bool,
  hasDiv: PropTypes.bool,
  img: PropTypes.string,
};
