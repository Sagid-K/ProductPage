/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cart1 } from "../../icons/Cart1";
import "./style.css";

export const WithBuy = ({ cart, className, overlapClassName }) => {
  return (
    <div className={`with-buy ${cart} ${className}`}>
      {cart === "on" && (
        <div className={`overlap ${overlapClassName}`}>
          <Cart1 className="cart-1" color="black" />
          <div className="group">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="element">2</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

WithBuy.propTypes = {
  cart: PropTypes.oneOf(["off", "on"]),
};
