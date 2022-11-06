import React from "react";
import Image from 'next/image'

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import bannerImg from "../../public/assets/images/home/bannerImg.png";


import bannerLogo from "../../public/assets/images/home/banner-logo.png";


export default function Banner() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 30000,
        min: 320,
      },
      items: 1,
    },
  };
  return (
    <div className="container-fluid banner-section">
      <div className="image-wrap">
        <Carousel
          arrows={false}
          draggable={false}
          renderButtonGroupOutside
          responsive={responsive}
        >
          <div className="banner-height">
            <Image
              src={bannerImg}
              className="lazyload"
              alt="A woman is meditating at heartfulness meditation center in gurugram"
            />
            <div className="imgover">
              <Image
                src={bannerLogo}
                alt="logo"
                className="lazyload"
              />
              <hr className="banner-hr" />
              <h1 className="banner-title">Meditation center in Gurugram</h1>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
