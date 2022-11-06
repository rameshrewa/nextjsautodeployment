import React from "react";
import Image from 'next/image'

import aboutbg from "../../assets/images/about-bg.svg";

import nursery from "../../assets/images/home/nursery.png";


export default function Details() {
 
  return (
    <div className="col-md-12">
      <section className="section">
      <div>
          <div className="abtimg">
            <Image src={aboutbg} alt="aboutbg" className="lazyload" />
            <p className="text">Facilities</p>
          </div>
        </div>
        <div className="about-sec padding-abt">
          <div className="col-md-12">
            <section className="section">
              <div className="container">
                <div className="col-md-12">
                  <div>
                    <h3 className="header-tag header-padding">Nursery</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-text">
                      In keeping with the guidance of great masters and to be in
                      tune with nature we have the following plants grown in the
                      premises :-
                      <h6>
                        <b>Medicinal plants and herbs</b>
                      </h6>
                      <ul className="list-style">
                        <li>Giloy Aloe Vera</li>
                        <li>Tulsi</li>
                        <li>Marwa</li>
                        <li>Mint</li>
                        <li>Flowers that heal</li>
                        <li>Parijat</li>
                        <li>Aparjita</li>
                        <li>Lemon grass for herbal tea</li>
                        <li>Aromatic plants</li>
                        <li>Lemons</li>
                        <li>Marigolds</li>
                      </ul>
                      We also cater to indoors plants to ensure oxygen for
                      people in apartments and in work spaces given the
                      challenging AQI (air quality index) these days.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <Image
                        src={nursery}
                        width="569px"
                        height="369px"
                        alt="nursery"
                        className="lazyload"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      
    </div>
  );
}
