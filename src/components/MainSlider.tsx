import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { AppImage } from "./AppImage";
import { Fragment } from "react";

export const MainSlider = ({ items }: any) => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
  };

  return (
    <>
      <div className="mainSlider">
        <div className="mainSlider-content">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              prevEl: ".slide-prev",
              nextEl: ".slide-next",
            }}
            breakpoints={breakpoints}
          >
            {items.map((items: any) => (
              <Fragment key={items.id}>
                <SwiperSlide>
                  <div className="mainSlider-item">
                    <AppImage
                      src={items.url}
                      alt="photo"
                      width="auto"
                      height="auto"
                    />
                  </div>
                </SwiperSlide>
              </Fragment>
            ))}
          </Swiper>
        </div>
        <div className="mainSlider-control">
          <button className="slide-next">
            <FaChevronRight />
          </button>
          <button className="slide-prev">
            <FaChevronLeft />
          </button>
        </div>
      </div>
    </>
  );
};
