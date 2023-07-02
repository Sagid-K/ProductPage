/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconCopyright } from "../../icons/IconCopyright";
import { IconFacebook1 } from "../../icons/IconFacebook1";
import { IconInstagram1 } from "../../icons/IconInstagram1";
import { IconLinkedin1 } from "../../icons/IconLinkedin1";
import { IconTwitter1 } from "../../icons/IconTwitter1";
import { AppStore } from "../AppStore";
import { GooglePlay } from "../GooglePlay";
import { Logo } from "../Logo";
import { QrCode } from "../QrCode";
import { SendMail } from "../SendMail";
import { UnderLine } from "../UnderLine";
import "./style.css";

export const Footer = ({
  className,
  googlePlayVector = "https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-3.svg",
  googlePlayImg = "https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-2.svg",
  googlePlayVector1 = "https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-4.svg",
  googlePlayVector2 = "https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-1-1.svg",
}) => {
  return (
    <div className={`footer ${className}`}>
      <div className="frame-18">
        <UnderLine
          className="under-line-instance"
          line="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/line-1-2.svg"
          lineClassName="under-line-2"
        />
        <div className="frame-wrapper">
          <div className="frame-19">
            <IconCopyright className="icon-copyright" />
            <p className="copyright-rimel">Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </div>
      <div className="frame-20">
        <div className="frame-21">
          <div className="frame-22">
            <div className="frame-22">
              <Logo className="logo-2" exclusiveClassName="design-component-instance-node-2" />
              <div className="subscribe">Subscribe</div>
            </div>
            <p className="text-wrapper-2">Get 10% off your first order</p>
          </div>
          <SendMail
            className="send-mail-instance"
            enterYourEmailClassName="design-component-instance-node-2"
            iconSend1Color="#FAFAFA"
          />
        </div>
        <div className="frame-22">
          <div className="text-wrapper-3">Support</div>
          <div className="frame-21">
            <p className="element-bijoy-sarani">111 Bijoy sarani, Dhaka,&nbsp;&nbsp;DH 1515, Bangladesh.</p>
            <div className="text-wrapper-2">exclusive@gmail.com</div>
            <div className="text-wrapper-2">+88015-88888-9999</div>
          </div>
        </div>
        <div className="frame-22">
          <div className="text-wrapper-3">Account</div>
          <div className="frame-21">
            <div className="text-wrapper-4">My Account</div>
            <div className="text-wrapper-2">Login / Register</div>
            <div className="text-wrapper-2">Cart</div>
            <div className="text-wrapper-2">Wishlist</div>
            <div className="text-wrapper-2">Shop</div>
          </div>
        </div>
        <div className="frame-22">
          <div className="text-wrapper-3">Quick Link</div>
          <div className="frame-21">
            <div className="text-wrapper-4">Privacy Policy</div>
            <div className="text-wrapper-2">Terms Of Use</div>
            <div className="text-wrapper-2">FAQ</div>
            <div className="text-wrapper-2">Contact</div>
          </div>
        </div>
        <div className="frame-22">
          <div className="frame-22">
            <div className="text-wrapper-3">Download App</div>
            <div className="frame-23">
              <p className="save-with-app-new">Save $3 with App New User Only</p>
              <div className="frame-24">
                <QrCode className="qr-code-instance" />
                <div className="frame-25">
                  <GooglePlay
                    className="google-play-instance"
                    img={googlePlayImg}
                    vector={googlePlayVector2}
                    vector1={googlePlayVector1}
                    vector2={googlePlayVector}
                  />
                  <AppStore className="app-store-instance" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-26">
            <IconFacebook1 className="icon-instance-node-2" />
            <IconTwitter1 className="icon-instance-node-2" />
            <IconInstagram1 className="icon-instance-node-2" />
            <IconLinkedin1 className="icon-instance-node-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  googlePlayVector: PropTypes.string,
  googlePlayImg: PropTypes.string,
  googlePlayVector1: PropTypes.string,
  googlePlayVector2: PropTypes.string,
};
