import React from "react";
import "./testi.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testi = () => {
  return (
    <section className="testi container section">
      <h2 className="section_title">Testimonials</h2>
      <p className="section_subtitle">What people say</p>

      <Swiper
        className="testi_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testi_card" key={id}>
              <img src={image} alt="JoJo" className="testi_img" />
              <h3 className="testi_name">{title}</h3>
              <p className="testi_description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testi;
