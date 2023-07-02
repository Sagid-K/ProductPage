/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { HeartSmall5 } from "../../icons/HeartSmall5";
import "./style.css";

export const FillHeart = ({ className }) => {
  return (
    <div className={`fill-heart ${className}`}>
      <HeartSmall5 className="heart-small" />
    </div>
  );
};
