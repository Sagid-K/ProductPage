import React from "react";
import { Button } from "../../components/Button";
import { Cart } from "../../components/Cart";
import { CartWithFlat } from "../../components/CartWithFlat";
import { CategoryRectangle } from "../../components/CategoryRectangle";
import { ColourChnage } from "../../components/ColourChnage";
import { Footer } from "../../components/Footer";
import { FourStar } from "../../components/FourStar";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { Line } from "../../components/Line";
import { Roadmap } from "../../components/Roadmap";
import { TopHeader } from "../../components/TopHeader";
import { UnderLine } from "../../components/UnderLine";
import { HeartSmall5 } from "../../icons/HeartSmall5";
import { IconDelivery } from "../../icons/IconDelivery";
import { IconMinus1 } from "../../icons/IconMinus1";
import { IconPlus } from "../../icons/IconPlus";
import { IconReturn1 } from "../../icons/IconReturn1";
import "./style.css";

export const ProductDetailsPage = () => {
  return (
    <div className="product-details-page">
      <div className="div-3">
        <TopHeader className="top-header-instance" />
        <HeaderWrapper
          className="header-3"
          headerHeader="home"
          headerHeaderHeaderHomeClassName="header-4"
          withBuyCart="off"
          withBuyCartOnClassName="header-5"
        />
        <Line className="line-3" />
        <Roadmap
          className="roadmap-instance"
          hasDiv={false}
          hasImg={false}
          hasLine={false}
          hasNothing={false}
          img="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/line-13.svg"
          line="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/line-13.svg"
          nothingClassName="roadmap-2"
          text="Havic HV G-92 Gamepad"
        />
        <div className="image-wrapper">
          <img
            className="image"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/image-63@2x.png"
          />
        </div>
        <div className="img-wrapper">
          <img
            className="image-2"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/image-57@2x.png"
          />
        </div>
        <div className="frame-27">
          <img
            className="image-3"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/image-58@2x.png"
          />
        </div>
        <div className="frame-28">
          <img
            className="image-4"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/image-61@2x.png"
          />
        </div>
        <div className="frame-29">
          <img
            className="image-5"
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/image-59@2x.png"
          />
        </div>
        <h1 className="h-1">Havic HV G-92 Gamepad</h1>
        <div className="text-wrapper-5">$192.00</div>
        <div className="frame-30">
          <div className="frame-31">
            <FourStar className="four-star-instance" />
            <div className="text-wrapper-6">(150 Reviews)</div>
          </div>
          <div className="frame-32">
            <img
              className="line-4"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/line-17.svg"
            />
            <div className="text-wrapper-7">In Stock</div>
          </div>
        </div>
        <p className="playstation">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install &amp; mess free removal Pressure
          sensitive.
        </p>
        <div className="frame-33">
          <div className="text-wrapper-8">Colours:</div>
          <ColourChnage />
        </div>
        <div className="frame-34">
          <div className="text-wrapper-9">Size:</div>
          <div className="frame-35">
            <div className="div-wrapper">
              <div className="text-wrapper-10">XS</div>
            </div>
            <div className="frame-36">
              <div className="text-wrapper-11">S</div>
            </div>
            <div className="frame-37">
              <div className="text-wrapper-12">M</div>
            </div>
            <div className="frame-36">
              <div className="text-wrapper-13">L</div>
            </div>
            <div className="frame-38">
              <div className="text-wrapper-14">XL</div>
            </div>
          </div>
        </div>
        <div className="under-line-3" />
        <div className="frame-39">
          <div className="icon-minus-wrapper">
            <IconMinus1 className="icon-minus" />
          </div>
          <div className="frame-40">
            <div className="text-wrapper-15">2</div>
          </div>
          <div className="icon-plus-wrapper">
            <IconPlus className="icon-plus" color="white" />
          </div>
        </div>
        <Button
          button="small"
          className="button-instance"
          hover={false}
          text="Buy Now"
        />
        <div className="wishlist-wrapper">
          <HeartSmall5 className="wishlist" />
        </div>
        <div className="frame-41">
          <UnderLine
            className="under-line-4"
            line="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/line-1-3.svg"
            lineClassName="under-line-5"
          />
          <div className="frame-42">
            <IconDelivery className="icon-instance-node-3" />
            <div className="frame-43">
              <div className="text-wrapper-16">Free Delivery</div>
              <p className="p">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="frame-44">
            <IconReturn1 className="icon-instance-node-3" />
            <div className="frame-43">
              <div className="text-wrapper-16">Return Delivery</div>
              <p className="free-days">
                <span className="span">Free 30 Days Delivery Returns. </span>
                <span className="text-wrapper-17">Details</span>
              </p>
            </div>
          </div>
        </div>
        <div className="frame-45">
          <div className="frame-32">
            <CategoryRectangle className="category-rectangle-instance" />
            <div className="text-wrapper-18">Related Item</div>
          </div>
          <div className="frame-46">
            <CartWithFlat property1="cart-with-discount" />
            <CartWithFlat property1="cart-with-discount-hover" />
            <CartWithFlat property1="variant-3" />
            <Cart product="bestselling-cooling-fan" />
          </div>
        </div>
        <Footer
          className="footer-instance"
          googlePlayImg="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-2-2.svg"
          googlePlayVector="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-3-2.svg"
          googlePlayVector1="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-4-2.svg"
          googlePlayVector2="https://generation-sessions.s3.amazonaws.com/cd2f0cc7b22e6f3416ad61db89f159b9/img/vector-1-2.svg"
        />
      </div>
    </div>
  );
};
