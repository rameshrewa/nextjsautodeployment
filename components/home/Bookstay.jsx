import Link from 'next/link'
import { Button } from "react-bootstrap";
import Image from "next/image";
import bookStay from "../../public/assets/images/home/bookstay-img.png";

export default function Bookstay({Bookstay}) {
  return (
    <div className="col-md-12">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 book-stay padding-0 book-stay-radious">
              <div className="book-stay-padding">
                <h3 className="contact-us align_center">
                  {Bookstay?.Title}
                </h3>
                <p className="home-content bookstay-color">
                {Bookstay?.Content}
                </p>
                <Link href="/bookastay" className="header-link">
                  <Button className="btn-register">{Bookstay?.ButtonText}</Button>
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
