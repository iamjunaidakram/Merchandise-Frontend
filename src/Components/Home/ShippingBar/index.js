import React from 'react';
import './shippingBar.scss';
import Slider from 'react-slick';

function ShippingBar() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  };
  return (
    <div className="shipping_bar">
      <Slider {...settings}>
        <div>
          <h1>FREE SHIPPING NATIONWIDE</h1>
        </div>
        <div>
          <h1>FREE SHIPPING NATIONWIDE</h1>
        </div>
        <div>
          <h1>FREE SHIPPING NATIONWIDE</h1>
        </div>
        <div>
          <h1>FREE SHIPPING NATIONWIDE</h1>
        </div>
        <div>
          <h1>FREE SHIPPING NATIONWIDE</h1>
        </div>
        <div>
          <h1>FREE SHIPPING NATIONWIDE</h1>
        </div>
        <div>
          <h1>FREE SHIPPING NATIONWIDE</h1>
        </div>
        <div>
          <h1>FREE SHIPPING NATIONWIDE</h1>
        </div>
      </Slider>
    </div>
  );
}
export default ShippingBar;
