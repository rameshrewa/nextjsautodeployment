
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import PropTypes from "prop-types";

import Link from 'next/link'

import Image from "next/image";

import sleep from "../../public/assets/images/home/ashramevents/sleep.png";

import second from "../../public/assets/images/home/ashramevents/second.png";

import labevent from "../../public/assets/images/home/ashramevents/labevent.png";

import group from "../../public/assets/images/home/ashramevents/group.png";

import sleepOne from "../../public/assets/images/home/ashramevents/sleepone.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    paritialVisibilityGutter: 60,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const imageData = [
  {
    img: second,
    info: "A library at heartfulness meditation center in gurugram",
    msg: "Library and Seeker's Lounge",
    id: "2",
    link: "/lounge",
  },
  {
    img: sleep,
    info: "Dining area and kitchen at heartfulness meditation center in gurugram",
    id: "1",
    msg: "Dining Area and Kitchen",
  },
  {
    img: labevent,
    info: "Book store at heartfulness meditation center in gurugram",
    id: "3",
    link: "/books",
    msg: "Book & More store",
  },
  {
    img: sleepOne,
    info: "Chidren's hall at heartfulness meditation center in gurugram",
    id: "4",
    link: "/childrenCenter",
    msg: "Children's Center",
  },
  {
    img: group,
    info: "Meditation hall at heartfulness meditation center in gurugram",
    id: "5",
    msg: "Meditation Hall",
  },
];

function Facilitiesmedia() {
  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide, totalItems },
    } = rest;
    return (
      <div className="carousel-button-group">
        <div className="navigations">
          <button
            type="button"
            className={currentSlide === 0 ? "button-left" : ""}
            onClick={() => previous()}
          >
            <Image
              src="../../assets/images/home/ashramevents/rightarrow.png"
              style={{ transform: "rotate(180deg)" }}
              alt="right"
              className="lazyload"
              width={41} height={27}
            />
          </button>
          <button
            type="button"
            className={totalItems > 5 ? "" : "button-left"}
            onClick={() => next()}
          >
            <Image
              src="../../assets/images/home/ashramevents/rightarrow.png"
              alt="right"
              className="lazyload"
              width={41} height={27}
            />
          </button>
        </div>
      </div>
    );
  };

  ButtonGroup.propTypes = {
    next: PropTypes.func.isRequired,
    previous: PropTypes.func.isRequired,
  };

  return (
    <div className="facilities-section">
      <div className="container">
        <div className="carousel-section slider-padding">
          <Carousel
            ssr
            responsive={responsive}
            arrows={false}
            draggable={false}
            itemClass="carousel-item-padding-40-px image-item align-center"
            renderButtonGroupOutside
            customButtonGroup={<ButtonGroup />}
          >
            {imageData.map((image) => {
              return (
                <div key={image.id}>
                  <div>
                    <Link href="/#">
                      <img
                        alt={image.info}
                        src={image.img.src}
                        layout="fill"
                        className="lazyload img-fluid"
                      />
                    </Link>
                  </div>
                  <h5 className="legend facilitie-text">{image.msg}</h5>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Facilitiesmedia;
