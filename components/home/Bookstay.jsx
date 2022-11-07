import Link from "next/Link";
import { Button } from "react-bootstrap";
import Image from "next/image";
import bookStay from "../../public/assets/images/home/bookstay-img.png";

export default function Bookstay() {
  return (
    <div className="col-md-12">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 book-stay padding-0 book-stay-radious">
              <div className="book-stay-padding">
                <h3 className="contact-us align_center">
                  Book a stay - Gurugram
                </h3>
                <p className="home-content bookstay-color">
                  Heartfulness Gurugram welcomes members, seekers, friends &
                  families and all those who are interested in experiencing this
                  special place which can be transformational, to visit and stay
                  at the Heartfulness Gurugram Center. Instructor-led individual
                  meditation sessions can be facilitated on request, as well
                </p>
                <div className="home-content bookstay-color">
                  <p className="home-content bookstay-color">Visiting Hours:</p>
                  1) Weekdays (Monday to Friday) : 7 AM to 7 PM <br />
                  2) Weekends (Saturdays/Sundays) : 7 AM to 7 PM <br />
                  <p>
                    Overnight stay is permitted to members of the organization.
                  </p>
                  <p>
                    Canteen is operational. Fresh ashram-grown vegetables and
                    some seasonal fruits are available.
                  </p>
                </div>
                <Link href="/bookastay" className="header-link">
                  <Button className="btn-register">Register Now</Button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 padding-0">
              <Image
                src={bookStay.src}
                alt="an empty road at heartfulness meditation center in gurugram"
                className="img-mobile lazyload"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
