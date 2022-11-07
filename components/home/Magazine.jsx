
import { Button } from "react-bootstrap";
import Image from "next/image";
import magazine from "../../public/assets/images/home/magazine/magazine.png"

export default function Magazine() {
  const magazineLink = () => {
    const openUrl = "https://www.heartfulnessmagazine.com";

    window.open(openUrl, "_blank");
  };

  return (
    <div className="mazagine-bg">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 book-stay-padding">
              <Image
                src={magazine}
                alt="Heartfulness maagzine"
                className="lazyload"
                width={194}
                height={200}
              />
            </div>
            <div className="col-md-6 magazine-padding">
              <h3 className="header-tag">Heartfulness Magazine</h3>
              <br />
              <p className="mazagine-content">
                Receive useful tips from around the world on lifestyle,
                relationships, health and well-being, Yoga, Heartfulness and
                much more
              </p>
              <Button className="donate-btn" onClick={magazineLink}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
