import React from "react";
import Image from "next/image";
import aboutbg from "../../public/assets/images/about-bg.svg";
import nursery from "../../public/assets/images/home/nursery.png";

export default function Details({ about }) {
  return (
    <div className="col-md-12">
      <section className="section">
        <div>
          <div className="abtimg">
            <Image src={aboutbg} alt="aboutbg" className="lazyload" />
            <p className="text">{about.Title}</p>
          </div>
        </div>
        <div className="about-sec padding-abt">
          <div className="col-md-12">
            <section className="section">
              <div className="container">
                <div className="col-md-12">
                  <div>
                    <h3 className="header-tag header-padding">{about.Title}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    {about.Content?.map((item) => {
                      return (
                        <div key={item?.id} className="about-text">
                          <h6>
                            <b>{item?.Title}</b>
                          </h6>
                          {item?.Content}
                        </div>
                      );
                    })}
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
