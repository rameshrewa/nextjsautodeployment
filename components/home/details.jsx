import React from "react";
import Image from 'next/image'

import detailsBG from "../../public/assets/images/details-bg.png";


export default function Details({Details}) {
 
  return (
    <div className="col-md-12">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="header-tag header-padding">{Details?.Title}</h3>
              <p className="home-content home-color">
              {Details?.Content}
              </p>
              <button type="button" className="btn-register btn btn-primary btn btn-primary">
              {Details?.ButtonText}</button>
            </div>
            <div className="col-md-6 pad-dada">
              <Image
                src={detailsBG}
                alt="heartfulness guide, daaji closed his eyes and meditating"
                className="lazyload"
              />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
