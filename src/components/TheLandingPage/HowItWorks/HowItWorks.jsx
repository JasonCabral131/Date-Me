import React from "react";
import "./style.scss";
import men from "./../../../assets/images/men.png";
import girl from "./../../../assets/images/girl.png";
import { FiMousePointer } from "react-icons/fi";
import { IoIosListBox } from "react-icons/io";
import heart from "./../../../assets/images/heart-heart.png";
const HowItWorks = ({ howWorksView }) => {
  return (
    <section id="how-it-works" ref={howWorksView}>
      <div className="how-it-works-container">
        <h1 className="feature-heading">How It Works</h1>
        <div className="how-it-woks-infos">
          <div className="works-info">
            <div className="works-info-img">
              <img src={men} className="front" />
              <div className="work-info-selct">
                <img src={girl} className="girl-first" />
                <FiMousePointer
                  size={18}
                  color="#ff2c52"
                  className="icon-select"
                />
              </div>
            </div>
            <h2 className="info-heading">Choose your Partner</h2>
            <span className="border_heading" />
            <p className="info-content">
              Dating isn't just about dating anymore. You are picking your
              potential Apocalypse partner. Choose wisely folks
            </p>
          </div>
          <div className="works-info">
            <div className="works-info-img">
              <img src={men} className="front" />
              <div className="work-info-selct">
                <IoIosListBox size={50} color="#FACFD5" />
              </div>
            </div>
            <h2>Compare your Taste</h2>
            <span className="border_heading" />
            <p className="info-content">
              Date someone who gives you the same feeling of when you see your
              food coming at a restaurant
            </p>
          </div>
          <div className="works-info">
            <div className="works-info-img">
              <img src={men} className="front" />
              <img src={heart} className="center" />
              <img src={girl} className="left" />
            </div>
            <h2>Enjoy your Date</h2>
            <span className="border_heading" />
            <p className="info-content">
              Anyone can catch your eye, but it takes someone special to catch
              your heart be careful who you dating with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
