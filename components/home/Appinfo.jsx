
import Image from "next/image";
import mobiles from "../../public/assets/images/home/app-info/mobiles.png"
import appStore from "../../public/assets/images/home/app-info/appstore.png"
import googlePlay from "../../public/assets/images/home/app-info/googleplay.png"

const Appinfo = () => {
  return (
    <div className="app-info-bg">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image
                src={mobiles.src}
                alt="no data"
                className="lazyload"
                width={636}
                height={387}
                fit
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="col-md-6 book-stay-padding">
              <p className="bookstay-color">
                To Practice and to Connect with our Trainers
              </p>
              <p className="app-info1">Download the</p>
              <h3 className="app-info">Smartphone App</h3>
              <div className="row">
                <div className="col">
                  <a
                    href="https://heartfulness.org/in/heartsapp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={appStore.src}
                      alt="appstore"
                      className="lazyload"
                      width={146}
                      height={45}
                    />
                  </a>
                </div>
                <div className="col">
                  <a
                    href="https://heartfulness.org/in/heartsapp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={googlePlay.src}
                      alt="playstore"
                      className="lazyload"
                      width={146}
                      height={45}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appinfo;
