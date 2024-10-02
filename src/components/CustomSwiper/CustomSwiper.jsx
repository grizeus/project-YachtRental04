import { useState, useEffect } from "react";
import { Keyboard, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const CustomSwiper = ({ children, mainStyle, mainGap, secGap }) => {
  const [queryResolution] = useState(
    window.matchMedia("(min-width: 1280px) and (max-width: 1439px)")
  );
  const [spaceBetween, setSpaceBetween] = useState(mainGap);

  useEffect(() => {
    const handleResize = () => {
      setSpaceBetween(queryResolution.matches ? secGap : mainGap);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [queryResolution, mainGap, secGap]);
  return (
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
      className={mainStyle}
    >
      {children}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default CustomSwiper;
