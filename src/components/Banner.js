import React from "react";

const Banner = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <img
            src={props.image}
            alt="current"
            className="img-fluid my-5 image-banner"
          />
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default Banner;
