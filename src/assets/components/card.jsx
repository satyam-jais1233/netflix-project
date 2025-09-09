import React from "react";
import TV from "../image/TV-logo.png";
import arrow from "../image/arrow.jpg";
import netflix from "../image/netflix.jpeg";

const Card = () => {
  return (
    <div className="container-fluid bg-black py-4 p-5">
      <h3 className="text-white mb-4">More reasons to join</h3>

      {/* Row for boxes */}
      <div className="row">
        {/* Box 1 */}
        <div className="col-lg-3 col-md-6 col-12">
          <div
            className="py-3 p-3 h-100"
            style={{
              background: "linear-gradient(180deg, #2b0f39 0%, #0a0a0a 100%)",
              borderRadius: "20px",
            }}
          >
            <h3 className="text-light py-2">Enjoy on your TV</h3>
            <h6 className="text-secondary py-2">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h6>
            <div className="text-end">
              <img
                src={netflix}
                alt="tv"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-lg-3 col-md-6 col-12">
          <div
            className="py-3 p-3 h-100"
            style={{
              background: "linear-gradient(180deg, #2b0f39 0%, #0a0a0a 100%)",
              borderRadius: "20px",
            }}
          >
            <h3 className="text-light py-2">
              Download your shows to watch offline
            </h3>
            <h6 className="text-secondary py-2">
              Save your favourites easily and always have something to watch.
            </h6>
            <div className="text-end">
              <img
                src={netflix}
                alt="arrow"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="col-lg-3 col-md-6 col-12">
          <div
            className="py-3 p-3 h-100"
            style={{
              background: "linear-gradient(180deg, #2b0f39 0%, #0a0a0a 100%)",
              borderRadius: "20px",
            }}
          >
            <h3 className="text-light py-2">Watch everywhere</h3>
            <h6 className="text-secondary py-4">
              Stream on your phone, tablet, laptop and TV without limits.
            </h6>
            <div className="text-end">
              <img
                src={netflix}
                alt="logo"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className="col-lg-3 col-md-6 col-12">
          <div
            className="py-3 p-3 h-100"
            style={{
              background: "linear-gradient(180deg, #2b0f39 0%, #0a0a0a 100%)",
              borderRadius: "20px",
            }}
          >
            <h3 className="text-light py-2">Create profiles for kids</h3>
            <h6 className="text-secondary py-2">
              Send kids on adventures with their favourite characters in a space
              made just for them — free with your membership.
            </h6>
            <div className="text-end">
              <img
                src={netflix}
                alt="logo"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
