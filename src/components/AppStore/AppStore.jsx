/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const AppStore = ({ className }) => {
  return (
    <div className={`app-store ${className}`}>
      <img
        className="download-appstore"
        alt="Download appstore"
        src="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/download-appstore-2@2x.png"
      />
    </div>
  );
};
