
import React from "react";

const Restart = () => {
  return (
    <>
      <div className="container-fluid py-5 bg-black d-flex flex-column justify-content-center">
        {/* Heading */}
        <h className="text-light text-center mb-3 px-2">
          Ready to watch? Enter your email to create or restart your membership.
        </h>

        {/* Input + Button */}
        <div className="row">
          <div className="col-lg-6  col-12 mx-auto">
            <div className="input-group input-group-lg gap-2">
              <input
                type="email"
                className="form-control rounded"
                placeholder="Email address"
              />
              <button className="btn btn-danger rounded">Get Started &gt;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restart;
