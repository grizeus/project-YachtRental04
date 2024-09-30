import { Keyboard, /* Navigation */ Pagination/* , Scrollbar */ } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Carousel.module.css";

const Carousel = () => {
  return (
    <>
      <Swiper
        modules={[/* Navigation */ Pagination, /* Scrollbar, */ Keyboard]}
        slidesPerView={"auto"}
        spaceBetween={32}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        mousewheel={{ enabled: true, sensitivity: 1 }}
        className="yachts-list"
      >
        <SwiperSlide className="yachts-item">
          <picture>
            <source
              srcSet="
        /images/our-yachts/14-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/14-img-yacht@2x-min.jpg 2x
      "
              media="(min-width:1440px)"
            />
            <source
              srcSet="
        /images/our-yachts/13-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/13-img-yacht@2x-min.jpg 2x
      "
              media="(min-width:1280px)"
            />
            <source
              srcSet="
        /images/our-yachts/12-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/12-img-yacht@2x-min.jpg 2x
      "
              media="(min-width:768px)"
            />
            <source
              srcSet="
        /images/our-yachts/11-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/11-img-yacht@2x-min.jpg 2x
      "
              media="(max-width:767px)"
            />
            <img
              className="yacht-photo"
              src="/images/our-yachts/11-img-yacht@1x-min.jpg"
              alt="yacht"
            />
          </picture>
          <div className="yacht-description">
            <h3 className="yacht-name">Arrow</h3>
            <p className="yacht-type">LUXURY YAHTS</p>
          </div>
          <hr className="specs-separator" />
          <div className="yacht-specs">
            <div className="yacht-spec">
              <p className="options">LENGTH</p>
              <p className="parameter">48m(155ft)</p>
            </div>
            <div className="yacht-spec">
              <p className="options">BUILDER</p>
              <p className="parameter">Admiral</p>
            </div>
            <div className="yacht-spec">
              <p className="options">BUILT</p>
              <p className="parameter">2021</p>
            </div>
            <div className="yacht-spec">
              <p className="options">GUESTS</p>
              <p className="parameter">11 in 5 cabins</p>
            </div>
            <div className="yacht-spec">
              <p className="options">PRICE</p>
              <p className="parameter">€33,500,000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="yachts-item">
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
              className="yacht-photo"
              src="/images/our-yachts/benetti-mob.jpg"
              alt="yacht"
            />
          </picture>
          <div className="yacht-description">
            <h3 className="yacht-name">BENETTI OASIS 40M BO122</h3>
            <p className="yacht-type">LUXURY YAHTS</p>
          </div>
          <hr className="specs-separator" />
          <div className="yacht-specs">
            <div className="yacht-spec">
              <p className="options">LENGTH</p>
              <p className="parameter">41m (133ft)</p>
            </div>
            <div className="yacht-spec">
              <p className="options">SHIPYARD</p>
              <p className="parameter">Benetti</p>
            </div>
            <div className="yacht-spec">
              <p className="options">BUILT</p>
              <p className="parameter">2025</p>
            </div>
            <div className="yacht-spec">
              <p className="options">GUESTS</p>
              <p className="parameter">10 in 5 cabins</p>
            </div>
            <div className="yacht-spec">
              <p className="options">PRICE</p>
              <p className="parameter">€23,210,000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="yachts-item">
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
              className="yacht-photo"
              src="/images/our-yachts/belle-anna-mob.jpg"
              alt="yacht"
            />
          </picture>
          <div className="yacht-description">
            <h3 className="yacht-name">BELLE ANNA</h3>
            <p className="yacht-type">LUXURY YAHTS</p>
          </div>
          <hr className="specs-separator" />
          <div className="yacht-specs">
            <div className="yacht-spec">
              <p className="options">LENGTH</p>
              <p className="parameter">50m(155ft)</p>
            </div>
            <div className="yacht-spec">
              <p className="options">SHIPYARD</p>
              <p className="parameter">ISA</p>
            </div>
            <div className="yacht-spec">
              <p className="options">BUILT</p>
              <p className="parameter">2012</p>
            </div>
            <div className="yacht-spec">
              <p className="options">GUESTS</p>
              <p className="parameter">12 in 6 cabins</p>
            </div>
            <div className="yacht-spec">
              <p className="options">PRICE</p>
              <p className="parameter">€21,000,000</p>
            </div>
          </div>
        </SwiperSlide>
        {/* <button className="swiper-button-next"></button>
        <button className="swiper-button-prev"></button> */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
};

export default Carousel;

{
  /* <>
  <ul className="yachts-list">
    <li className="yachts-item">
      <picture>
        <source
          srcSet="
        /images/our-yachts/14-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/14-img-yacht@2x-min.jpg 2x
      "
          media="(min-width:1440px)"
        />
        <source
          srcSet="
        /images/our-yachts/13-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/13-img-yacht@2x-min.jpg 2x
      "
          media="(min-width:1280px)"
        />
        <source
          srcSet="
        /images/our-yachts/12-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/12-img-yacht@2x-min.jpg 2x
      "
          media="(min-width:768px)"
        />
        <source
          srcSet="
        /images/our-yachts/11-img-yacht@1x-min.jpg 1x,
        /images/our-yachts/11-img-yacht@2x-min.jpg 2x
      "
          media="(max-width:767px)"
        />
        <img
          className="yacht-photo"
          src="/images/our-yachts/11-img-yacht@1x-min.jpg"
          alt="yacht"
        />
      </picture>
      <div className="yacht-description">
        <h3 className="yacht-name">Arrow</h3>
        <p className="yacht-type">LUXURY YAHTS</p>
      </div>
      <hr className="specs-separator" />
      <div className="yacht-specs">
        <div className="yacht-spec">
          <p className="options">LENGTH</p>
          <p className="parameter">48m(155ft)</p>
        </div>
        <div className="yacht-spec">
          <p className="options">BUILDER</p>
          <p className="parameter">Admiral</p>
        </div>
        <div className="yacht-spec">
          <p className="options">BUILT</p>
          <p className="parameter">2021</p>
        </div>
        <div className="yacht-spec">
          <p className="options">GUESTS</p>
          <p className="parameter">11 in 5 cabins</p>
        </div>
        <div className="yacht-spec">
          <p className="options">PRICE</p>
          <p className="parameter">€33,500,000</p>
        </div>
      </div>
    </li>
    <li className="yachts-item">
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
          className="yacht-photo"
          src="/images/our-yachts/benetti-mob.jpg"
          alt="yacht"
        />
      </picture>
      <div className="yacht-description">
        <h3 className="yacht-name">BENETTI OASIS 40M BO122</h3>
        <p className="yacht-type">LUXURY YAHTS</p>
      </div>
      <hr className="specs-separator" />
      <div className="yacht-specs">
        <div className="yacht-spec">
          <p className="options">LENGTH</p>
          <p className="parameter">41m (133ft)</p>
        </div>
        <div className="yacht-spec">
          <p className="options">SHIPYARD</p>
          <p className="parameter">Benetti</p>
        </div>
        <div className="yacht-spec">
          <p className="options">BUILT</p>
          <p className="parameter">2025</p>
        </div>
        <div className="yacht-spec">
          <p className="options">GUESTS</p>
          <p className="parameter">10 in 5 cabins</p>
        </div>
        <div className="yacht-spec">
          <p className="options">PRICE</p>
          <p className="parameter">€23,210,000</p>
        </div>
      </div>
    </li>
    <li className="yachts-item">
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
          className="yacht-photo"
          src="/images/our-yachts/belle-anna-mob.jpg"
          alt="yacht"
        />
      </picture>
      <div className="yacht-description">
        <h3 className="yacht-name">BELLE ANNA</h3>
        <p className="yacht-type">LUXURY YAHTS</p>
      </div>
      <hr className="specs-separator" />
      <div className="yacht-specs">
        <div className="yacht-spec">
          <p className="options">LENGTH</p>
          <p className="parameter">50m(155ft)</p>
        </div>
        <div className="yacht-spec">
          <p className="options">SHIPYARD</p>
          <p className="parameter">ISA</p>
        </div>
        <div className="yacht-spec">
          <p className="options">BUILT</p>
          <p className="parameter">2012</p>
        </div>
        <div className="yacht-spec">
          <p className="options">GUESTS</p>
          <p className="parameter">12 in 6 cabins</p>
        </div>
        <div className="yacht-spec">
          <p className="options">PRICE</p>
          <p className="parameter">€21,000,000</p>
        </div>
      </div>
    </li>
  </ul>
</>; */
}
