import React from "react";
import Image from 'next/image'

import detailsBG from "../../public/assets/images/details-bg.png";


export default function Details() {
 
  return (
    <div className="col-md-12">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="header-tag header-padding">Heartfulness</h3>
              <p className="home-content home-color">
                Heartfulness is a way of life which awakens our inner potential
                and develops enhanced awareness. The Heartfulness practice
                connects each of us with the light and love in our hearts.It
                restores balance to our lives and enables us to manage every
                aspect of our daily lives in an improved way.
              </p>
              <p className="home-content home-color">
                It is a combination of simple practices and techniques
                comprising of Relaxation, Meditation and Cleaning
              </p>
              <p className="home-content home-color">
                Connecting all of humanity through a network of thousands of
                heartspots and trainers across the world, Heartfulness offers a
                daily practice that is immensely rewarding. This precious gift
                for practice and human transformation is offered free of charge
              </p>
            
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
