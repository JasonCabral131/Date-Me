import React from "react";
import "./style.scss";
import TheHeading from "./TheHeading";
import coverpage from "./../../assets/images/cover.png";
const LandingPage = (props) => {
  return (
    <div>
      <TheHeading />
      <div className="cover-page">
        <img src={coverpage} />
        <div className="cover-card">
          <p className="heading-msg">It Is Never Too Late To Fall In Love</p>
          <p className="heading-context">
            One day, someone will walk into your life and make you see why it
            never worked out with anyone else.
          </p>
          <p className="find-love"> FIND A LOVE</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
