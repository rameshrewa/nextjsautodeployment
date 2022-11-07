import React from "react";

import Image from 'next/image'

import footer from "../public/assets/images/footer/footer-logo.png";

import LeftArrow from "../public/assets/images/footer/Icon ionic-ios-arrow-round-back.png";

import facebook from "../public/assets/images/icons/facebook.svg";
import twitter from "../public/assets/images/icons/twitter.svg";
import instagram from "../public/assets/images/icons/instagram.svg";
import youtube from "../public/assets/images/icons/youtube.svg";
import linkedin from "../public/assets/images/icons/linkedin.svg";


export default function Footer({  }) {
  return (
    <>
      <div className="footer-wrapper">
      <footer className="footer-section">
        <div className="container">
          <div className="row footer-widget-row">
            <div className="col-md-4 logo-section footer-widget">
              <Image src={footer} alt="footer" className="lazyload" />
              <p className="footer-desc">
                Heartfulness is a simple and subtle practice of mediation that
                connects each of us with the light and love in our hearts. It is
                a path of experiencing inner Self and teaches us to dive deep
                into our heart, and be in a natural state of love, peace, and
                calmness.
              </p>
            </div>
            <div className="col-md-4 quick-links footer-widget">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="/#farming">
                    <span className="p-quote">
                      <Image src={LeftArrow} alt="icon" className="lazyload" />{" "}
                      &nbsp;&nbsp;Farming
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sahajmarg.org/smww/satkhol/information"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="p-quote">
                      <Image src={LeftArrow} alt="icon" className="lazyload" />{" "}
                      &nbsp;&nbsp;Satkhol
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/books">
                    <span className="p-quote">
                      <Image src={LeftArrow} alt="icon" className="lazyload" />{" "}
                      &nbsp;&nbsp;Book store
                    </span>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://heartfulness.org/en/privacy-policy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="p-quote">
                      <img src={LeftArrow} alt="icon" /> &nbsp;&nbsp;Find a
                      trainer
                    </span>
                  </a>
                </li> */}
                <li>
                  <a href="/notification">
                    <span className="p-quote">
                      <Image src={LeftArrow} alt="icon" className="lazyload" />{" "}
                      &nbsp;&nbsp;Notices
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/fatehgarh">
                    <span className="p-quote">
                      <Image src={LeftArrow} alt="icon" className="lazyload" />{" "}
                      &nbsp;&nbsp;Fathegarh
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 contact footer-widget contact-top">
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <p className="p-desc copy-rights-row">
                Copyrights {new Date().getFullYear()}. All rights reserved.
              </p>
            </div>
            <div className="col-md-4">
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/heartfulnessgurugram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={facebook} alt="facebook" className="lazyload" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/heartfulnessggn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={twitter} alt="twitter" className="lazyload" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/accounts/login/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={instagram} alt="instagram" className="lazyload" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/c/heartfulness"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={youtube} alt="youtube" className="lazyload" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/heartfulness/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={linkedin} alt="linkedin" className="lazyload" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="social-icons">
                <li className="p-desc">
                  <a
                    href="https://heartfulness.org/en/terms/"
                    target="_blank"
                    rel="noreferrer"
                    className="a-tag"
                  >
                    terms of use
                  </a>
                  <span>&nbsp;&nbsp;</span>
                </li>
                <li className="p-desc">
                  <a
                    href="https://heartfulness.org/en/privacy-policy/"
                    target="_blank"
                    rel="noreferrer"
                    className="a-tag"
                  >
                    privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}