import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/testimonials.css";
import { register } from "swiper/element/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import avatar01 from "../assets/img/avatar01.png";
import avatar02 from "../assets/img/avatar02.png";

import { EffectCards } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <section id="testimonials">
        <div
          className="container sliders"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h2 className="section__title">Testimonials</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>

                <h4>Jesica Fernandes</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  quis tempore vitae quod assumenda enim suscipit aspernatur.
                  Vero temporibus enim vel quaerat aperiam voluptatibus placeat
                  assumenda. Vel facilis corporis earum.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={avatar02} alt="" />
                </div>

                <h4>Jesica Fernandes</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  quis tempore vitae quod assumenda enim suscipit aspernatur.
                  Vero temporibus enim vel quaerat aperiam voluptatibus placeat
                  assumenda. Vel facilis corporis earum.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={avatar01} alt="" />
                </div>

                <h4>Jesica Fernandes</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  quis tempore vitae quod assumenda enim suscipit aspernatur.
                  Vero temporibus enim vel quaerat aperiam voluptatibus placeat
                  assumenda. Vel facilis corporis earum.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
