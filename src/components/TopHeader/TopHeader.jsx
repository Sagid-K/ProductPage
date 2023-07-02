/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Dropdown } from "../../icons/Dropdown";
import "./style.css";

export const TopHeader = ({ className }) => {
  return (
    <div className={`top-header ${className}`}>
      <div className="frame">
        <div className="div">
          <p className="summer-sale-for-all">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <div className="shopnow">ShopNow</div>
        </div>
        <div className="frame-2">
          <div className="english">English</div>
          <Dropdown className="drop-down" color="white" />
        </div>
      </div>
    </div>
  );
};
