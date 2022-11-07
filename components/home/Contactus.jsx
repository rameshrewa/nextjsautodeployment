import Image from "next/image";

import address from "../../public/assets/images/home/contact-us/address.png"
import watsapp from "../../public/assets/images/home/contact-us/watsapp.png"
import email from "../../public/assets/images/home/contact-us/email.png"
import facebook from "../../public/assets/images/home/contact-us/facebook.png"
import twitter from "../../public/assets/images/home/contact-us/twitter.png"
import gmap from "../../public/assets/images/home/contact-us/gmap.png"

export default function Contactus() {
  return (
    <div className="container">
      <section className="section">
        <div className="row ">
          <div
            className="col-md-4 padding-0 book-stay-padding"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <div>
              <h3 className="contact-us">Contact Us</h3>
              <h6>Address</h6>
              <address>
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{ width: "20%" }}
                    className="contact-us-width mg-div"
                  >
                    <Image
                      src={address.src}
                      alt="address"
                      className="lazyload"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div style={{ width: "80%" }} className="p-desc mg-div">
                    Palam Farm 40-41, Village Salhapur, Near Gurugram Sector 21
                    - 122017
                  </div>
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{ width: "20%" }}
                    className="contact-us-width mg-div"
                  >
                    <Image
                      src={watsapp.src}
                      alt="watsapp"
                      className="lazyload"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div
                    style={{ width: "80%" }}
                    className="p-desc no-caps mg-div"
                  >
                    +91 85589 34756
                  </div>
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{ width: "20%" }}
                    className="contact-us-width mg-div"
                  >
                    <Image
                      src={email.src}
                      alt="email"
                      className="lazyload"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div
                    style={{ width: "80%" }}
                    className="p-desc no-caps mg-div"
                  >
                    gurugram@heartfulness.org
                  </div>
                </div>
              </address>
              <p>
                <a
                  href="https://www.facebook.com/heartfulnessgurugram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={facebook.src}
                    alt="facebook"
                    className="lazyload"
                    width={50}
                      height={50}
                  />
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.twitter.com/heartfulnessggn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={twitter.src}
                    alt="twitter"
                    className="lazyload"
                    width={50}
                      height={50}
                  />
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-8 padding-0">
            <Image
              src={gmap.src}
              alt="googlemap"
              className="lazyload"
              width={740}
              height={420}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
