import React from "react";

// import { Button } from "react-bootstrap";

import Image from 'next/image'

import ashramImg from "../../public/assets/images/home/ashram-img.png";

export default function Ashram({Ashram}) {
  return (
    <div className="col-md-12">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-lg-2">
              <h3 className="header-tag header-padding">
               {Ashram?.Title}
              </h3>
              <p className="home-content home-color">
              {Ashram?.Content} </p>
            </div>
            <div className="col-md-6 order-lg-1">
              <Image
                src={ashramImg}
                alt="Heartfulness meditation center in gurugram"
                className="lazyload"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
