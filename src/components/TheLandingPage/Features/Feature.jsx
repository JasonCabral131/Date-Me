import React from "react";
import "./style.scss";
import date from "./../../../assets/images/date.png";
import { IoLogoWechat } from "react-icons/io5";
import photo from "./../../../assets/images/phone-info.png";
import { RiHeartPulseLine } from "react-icons/ri";
const Feature = ({ features }) => {
  return (
    <section ref={features} style={{ width: "100%", display: "block" }}>
      <div className="feature-container">
        <h1 className="feature-heading">Match. Chat. Date</h1>
        <div className="feature-content-container">
          <div className="feature-content">
            <div className="feature-content-info">
              <img src={date} />
              <h1>Love can happen anywhere</h1>
              <p>
                On the tram, in a corner cafe or on an app. you never know who
                you might meet and how this might change you. Love is risky
              </p>
            </div>
            <div className="feature-content-info">
              <IoLogoWechat size={40} color={"#ff5172"} />
              <h1>Get Chatting</h1>
              <p>
                The first message counts! The icebreaker is your chance to break
                the ice and start a conversation and Sometimes all you need is
                twenty seconds of insane courage and I promise you, Something
                great will come of it.
              </p>
            </div>
          </div>
          <div className="feature-content">
            <img src={photo} />
            <div className="download-container fade-in">
              <button className="download">Download</button>
            </div>
          </div>
          <div className="feature-content">
            <div className="feature-content-info">
              <RiHeartPulseLine size={40} color={"#ff5172"} />
              <h1>Everything At A Glance</h1>
              <p>
                With the nearby list, you can see who is near you and online at
                anytime. All that's left now is for someone to take the first
                step
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
