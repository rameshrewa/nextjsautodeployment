import React from "react";

// import { Button } from "react-bootstrap";

import Image from 'next/image'

import ashramImg from "../../public/assets/images/home/ashram-img.png";

export default function Ashram() {
  return (
    <div className="col-md-12">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-lg-2">
              <h3 className="header-tag header-padding">
                Gurugram Meditation Center
              </h3>
              <p className="home-content home-color">
                The Gurugram Meditation center is a beautiful landscape
                surrounded by green fields on the North and West. It is situated
                on the border of Gurgaon and Delhi amidst 6.5 acres of land.
              </p>
              <p className="home-content home-color">
                The center was inaugurated in 2002 and comprises of a meditation
                hall of 10,000 sq feet which can accommodate upto 2,500 abhyasis
              </p>

              {/* <h6>Today ,it comprises of</h6>
              <p className="home-content home-color">
                Meditation Hall of 10000sq feet which can accommodate upto 2500
                abhyasis The center was inaugurated in 2002 and comprises of a
                meditation hall of 10,000 sq feet which can accommodate upto
                2,500 abhyasis
              </p> */}
              {/* <Button className="btn-knowmore">Know More</Button> */}
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
