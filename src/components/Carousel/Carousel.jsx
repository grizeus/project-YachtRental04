import { useState, useEffect } from "react";
import { Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Carousel.module.css";

import yacht11x1 from "../../images/our-yachts/11-img-yacht@1x-min.jpg";
import yacht11x2 from "../../images/our-yachts/11-img-yacht@2x-min.jpg";
import yacht12x1 from "../../images/our-yachts/12-img-yacht@1x-min.jpg";
import yacht12x2 from "../../images/our-yachts/12-img-yacht@2x-min.jpg";
import yacht13x1 from "../../images/our-yachts/13-img-yacht@1x-min.jpg";
import yacht13x2 from "../../images/our-yachts/13-img-yacht@2x-min.jpg";
import yacht14x1 from "../../images/our-yachts/14-img-yacht@1x-min.jpg";
import yacht14x2 from "../../images/our-yachts/14-img-yacht@2x-min.jpg";

const Carousel = () => {
  const [queryResolution] = useState(
    window.matchMedia("(min-width: 1280px) and (max-width: 1439px)")
  );
  const [spaceBetween, setSpaceBetween] = useState(32);

  useEffect(() => {
    const handleResize = () => {
      setSpaceBetween(queryResolution.matches ? 24 : 32);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [queryResolution]);

  return (
    <>
      <Swiper
        modules={[Pagination, Keyboard]}
        slidesPerView={"auto"}
        spaceBetween={spaceBetween}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        className={styles["yachts-list"]}
      >
        <SwiperSlide className={styles["yachts-item"]}>
          <picture>
            <source
              srcSet={`
        ${yacht14x1} 1x,
        ${yacht14x2} 2x
      `}
              media="(min-width:1440px)"
            />
            <source
              srcSet={`
        ${yacht13x1} 1x,
        ${yacht13x2} 2x
      `}
              media="(min-width:1280px)"
            />
            <source
              srcSet={`
        ${yacht12x1} 1x,
        ${yacht12x2} 2x
      `}
              media="(min-width:768px)"
            />
            <source
              srcSet={`
        ${yacht11x1} 1x,
        ${yacht11x2} 2x
      `}
              media="(max-width:767px)"
            />
            <img
              className={styles["yacht-photo"]}
              src={yacht11x1}
              alt="yacht"
            />
          </picture>
          <div className={styles["yacht-description"]}>
            <h3 className={styles["yacht-name"]}>Arrow</h3>
            <p className={styles["yacht-type"]}>LUXURY YAHTS</p>
          </div>
          <hr className={styles["specs-separator"]} />
          <div className={styles["yacht-specs"]}>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>LENGTH</p>
              <p className={styles["parameter"]}>48m(155ft)</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>BUILDER</p>
              <p className={styles["parameter"]}>Admiral</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>BUILT</p>
              <p className={styles["parameter"]}>2021</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>GUESTS</p>
              <p className={styles["parameter"]}>11 in 5 cabins</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>PRICE</p>
              <p className={styles["parameter"]}>€33,500,000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["yachts-item"]}>
          <picture>
            <source
              srcSet="
        /images/our-yachts/22-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/22-img-yacht@2x-min.jpg 2x
      "
              media="(min-width:1440px)"
            />
            <source
              srcSet="
        /images/our-yachts/21-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/21-img-yacht@2x-min.jpg 2x
      "
              media="(min-width:1280px)"
            />
            <source
              srcSet="
        /images/our-yachts/20-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/20-img-yacht@2x-min.jpg 2x
      "
              media="(min-width:768px)"
            />
            <source
              srcSet="
        /images/our-yachts/benetti-mob.jpg    1x,
        /images/our-yachts/benetti-mob@2x.jpg 2x
      "
              media="(max-width:767px)"
            />
            <img
              className={styles["yacht-photo"]}
              src="/images/our-yachts/benetti-mob.jpg"
              alt="yacht"
            />
          </picture>
          <div className={styles["yacht-description"]}>
            <h3 className={styles["yacht-name"]}>BENETTI OASIS 40M BO122</h3>
            <p className={styles["yacht-type"]}>LUXURY YAHTS</p>
          </div>
          <hr className={styles["specs-separator"]} />
          <div className={styles["yacht-specs"]}>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>LENGTH</p>
              <p className={styles["parameter"]}>41m (133ft)</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>SHIPYARD</p>
              <p className={styles["parameter"]}>Benetti</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>BUILT</p>
              <p className={styles["parameter"]}>2025</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>GUESTS</p>
              <p className={styles["parameter"]}>10 in 5 cabins</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>PRICE</p>
              <p className={styles["parameter"]}>€23,210,000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["yachts-item"]}>
          <picture>
            <source
              srcSet="
        /images/our-yachts/31-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/31-img-yacht@2x-min.jpg 2x
      "
              media="(min-width:1440px)"
            />
            <source
              srcSet="
        /images/our-yachts/30-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/30-img-yacht@2x-min.jpg 2x
      "
              media="(min-width:1280px)"
            />
            <source
              srcSet="
        /images/our-yachts/belle-anna-tab.jpg    1x,
        /images/our-yachts/belle-anna-tab@2x.jpg 2x
      "
              media="(min-width:768px)"
            />
            <source
              srcSet="
        /images/our-yachts/belle-anna-mob.jpg    1x,
        /images/our-yachts/belle-anna-mob@2x.jpg 2x
      "
              media="(max-width:767px)"
            />
            <img
              className={styles["yacht-photo"]}
              src="/images/our-yachts/belle-anna-mob.jpg"
              alt="yacht"
            />
          </picture>
          <div className={styles["yacht-description"]}>
            <h3 className={styles["yacht-name"]}>BELLE ANNA</h3>
            <p className={styles["yacht-type"]}>LUXURY YAHTS</p>
          </div>
          <hr className={styles["specs-separator"]} />
          <div className={styles["yacht-specs"]}>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>LENGTH</p>
              <p className={styles["parameter"]}>50m(155ft)</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>SHIPYARD</p>
              <p className={styles["parameter"]}>ISA</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>BUILT</p>
              <p className={styles["parameter"]}>2012</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>GUESTS</p>
              <p className={styles["parameter"]}>12 in 6 cabins</p>
            </div>
            <div className={styles["yacht-spec"]}>
              <p className={styles["options"]}>PRICE</p>
              <p className={styles["parameter"]}>€21,000,000</p>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
};

export default Carousel;
