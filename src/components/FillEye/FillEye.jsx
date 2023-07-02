/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { QuickView } from "../../icons/QuickView";
import "./style.css";

export const FillEye = ({ className, icon = <QuickView className="quick-view" /> }) => {
  return <div className={`fill-eye ${className}`}>{icon}</div>;
};
