import React from "react";
import bannerImg from "../image/banners.jpg";

const Banner = () => {
  return (
    <section
      className="d-flex align-items-center text-center text-white"
      style={{
        height: "100vh",
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1 className="fw-bold display-4">Unlimited movies, TV <br />shows and more</h1>
        <h3 className="mb-5">Watch anywhere. Cancel anytime.</h3>
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="row justify-content-center g-2">
          <div className="col-md-6 col-lg-4 ">
            <input
              type="email"
              className="form-control form-control-lg "
              placeholder="Email address "
              
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-danger btn-lg">Get Started &gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

