import { useState, useEffect } from "react";
import { Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./ReviewsCarousel.module.css";

import review1 from "../../images/reviews/reviews-image@1x-min.jpg";
import review1x2 from "../../images/reviews/reviews-image@2x-min.jpg";
import review2 from "../../images/reviews/reviews-image@1x-1-min.jpg";
import review2x2 from "../../images/reviews/reviews-image@2x-1-min.jpg";
import review3 from "../../images/reviews/reviews-image@1x-2-min.jpg";
import review3x2 from "../../images/reviews/reviews-image@2x-2-min.jpg";

const ReviewsCarousel = () => {
  const [queryResolution] = useState(
    window.matchMedia("(min-width: 1280px) and (max-width: 1439px)")
  );
  const [spaceBetween, setSpaceBetween] = useState(32);

  useEffect(() => {
    const handleResize = () => {
      setSpaceBetween(queryResolution.matches ? 26 : 32);
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
        className={styles["reviews-list"]}
      >
        <SwiperSlide className={styles["reviews-item"]}>
          <img
            srcSet={`
        ${review1} 1x,
        ${review1x2} 2x`}
            src={review1}
            alt="review"
            width="56"
            height="56"
            className={styles["reviews-item-img"]}
          />
          <div className={styles["reviews-subtitle-wrap"]}>
            <h3 className={styles["reviews-item-subtitle"]}>John Wax</h3>
            <p className={styles["review-item-desc"]}>
              I rented the Lagoon 620 with my family for a week-long vacation
              and it was the best decision ever. The yacht was spacious,
              comfortable, and luxurious, and the crew took care of everything.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["reviews-item"]}>
          <img
            srcSet={`
        ${review2} 1x,
        ${review2x2} 2x`}
            src={review2}
            alt="review"
            width="56"
            height="56"
            className={styles["reviews-item-img"]}
          />
          <div className={styles["reviews-subtitle-wrap"]}>
            <h3 className={styles["reviews-item-subtitle"]}>
              Victoria Romashenko
            </h3>
            <p className={styles["review-item-desc"]}>
              The Sunseeker Manhattan 66 was the perfect choice for our romantic
              getaway. The yacht was beautifully designed, with all the
              amenities we needed, and the crew was attentive and friendly.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles["reviews-item"]}>
          <img
            srcSet={`
        ${review3} 1x,
        ${review3x2} 2x`}
            src={review3}
            alt="review"
            width="56"
            height="56"
            className={styles["reviews-item-img"]}
          />
          <div className={styles["reviews-subtitle-wrap"]}>
            <h3 className={styles["reviews-item-subtitle"]}>Ihor Trachuk</h3>
            <p className={styles["review-item-desc"]}>
              The Azimut 80 was the most luxurious yacht I&apos;ve ever been on.
              The cabins were spacious and elegant, and the outdoor areas were
              perfect for relaxing and entertaining. Worth every penny!
            </p>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
};

export default ReviewsCarousel;
