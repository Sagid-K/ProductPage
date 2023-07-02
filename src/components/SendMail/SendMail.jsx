/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconSend1 } from "../../icons/IconSend1";
import "./style.css";

export const SendMail = ({ className, enterYourEmailClassName, iconSend1Color = "black" }) => {
  return (
    <div className={`send-mail ${className}`}>
      <div className={`enter-your-email ${enterYourEmailClassName}`}>Enter your email</div>
      <IconSend1 className="icon-send" color={iconSend1Color} />
    </div>
  );
};

SendMail.propTypes = {
  iconSend1Color: PropTypes.string,
};
