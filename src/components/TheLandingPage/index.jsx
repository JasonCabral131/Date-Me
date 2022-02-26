import React, { useRef } from "react";
import "./style.scss";
import TheHeading from "./TheHeading";
import coverpage from "./../../assets/images/cover.png";
import Feature from "./Features/Feature";
import HowItWorks from "./HowItWorks/HowItWorks";

const LandingPage = (props) => {
  const howWorksView = useRef();
  return (
    <div>
      <TheHeading {...props} howWorksView={howWorksView} />
      <div className="cover-page">
        <img src={coverpage} />
        <div className="cover-card">
          <p className="heading-msg landingin-page-title">
            It Is Never Too Late To Fall In Love
          </p>
          <p className="heading-context">
            One day, someone will walk into your life and make you see why it
            never worked out with anyone else.
          </p>
          <p className="find-love"> FIND A LOVE</p>
        </div>
      </div>
      <HowItWorks {...props} howWorksView={howWorksView} />
      <Feature {...props} />
    </div>
  );
};

export default LandingPage;
