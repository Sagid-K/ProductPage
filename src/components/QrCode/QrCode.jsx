/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const QrCode = ({ className }) => {
  return (
    <div className={`qr-code ${className}`}>
      <img
        className="qrcode"
        alt="Qrcode"
        src="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/qrcode-1-2@2x.png"
      />
    </div>
  );
};
