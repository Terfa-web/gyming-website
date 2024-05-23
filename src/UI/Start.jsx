import React from "react";
import "../styles/start.css";
import trainerImg from "../assets/img/trainer.png";

const Start = () => {
  return (
    <section className="container" id="classes">
      <div className="start__wrapper">
        <div className="start__img">
          <img
            src={trainerImg}
            alt=""
            data-aos="fade-left"
            data-aos-duration="1500"
          />
        </div>

        <div
          className="start__content"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="section__title">
            Ready to make a <span className="highlight">change?</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            vitae quas rem culpa sit ullam officia, nulla voluptatum consectetur
            corporis beatae cumque unde sint.
          </p>

          <button className="register__btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Start;
