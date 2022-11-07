import Image from "next/image";
import map_image1 from "../../public/assets/images/home/heartspots/map_image1.png"
export default function Heartsport({Heartsport}) {
return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="header-tag heart-title-padding">{Heartsport.Title}</h3>
              <a
                href="https://heartspots.heartfulness.org/"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src={map_image1.src}
                  alt="maps"
                  className="map-location map-radious lazyload"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
