/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GooglePlay = ({
  className,
  vector = "https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-1-1.svg",
  img = "https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-2-1.svg",
  vector1 = "https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-4-1.svg",
  vector2 = "https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-3-1.svg",
}) => {
  return (
    <div className={`google-play ${className}`}>
      <div className="overlap-group-5">
        <div className="overlap-3">
          <img className="vector-2" alt="Vector" src={vector} />
          <img className="vector-3" alt="Vector" src={img} />
          <img className="vector-4" alt="Vector" src={vector1} />
        </div>
        <img className="vector-5" alt="Vector" src={vector2} />
      </div>
    </div>
  );
};

GooglePlay.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
};
