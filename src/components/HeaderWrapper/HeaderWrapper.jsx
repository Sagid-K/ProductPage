/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HeartSmall5 } from "../../icons/HeartSmall5";
import { UserOff } from "../../icons/UserOff";
import { Header } from "../Header";
import { Logo } from "../Logo";
import { SearchComponentSet } from "../SearchComponentSet";
import { WithBuy } from "../WithBuy";
import "./style.css";

export const HeaderWrapper = ({
  className,
  headerHeaderHeaderHomeClassName,
  headerHeader = "header-home-hover",
  withBuyCart = "on",
  withBuyCartOnClassName,
}) => {
  return (
    <div className={`header-wrapper ${className}`}>
      <div className="frame-4">
        <Logo className="logo-instance" />
        <div className="frame-5">
          <Header className={headerHeaderHeaderHomeClassName} header={headerHeader} />
          <Header className="header-instance" header="contact" />
          <Header className="design-component-instance-node" header="about" />
          <Header className="header-2" header="sign-up" />
        </div>
      </div>
      <div className="frame-6">
        <SearchComponentSet property1="active" />
        <div className="frame-7">
          <HeartSmall5 className="icon-instance-node" />
          <WithBuy cart={withBuyCart} className={withBuyCartOnClassName} overlapClassName="with-buy" />
          <UserOff className="icon-instance-node" />
        </div>
      </div>
    </div>
  );
};

HeaderWrapper.propTypes = {
  headerHeader: PropTypes.string,
  withBuyCart: PropTypes.string,
};
