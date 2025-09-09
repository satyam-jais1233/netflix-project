import React from "react";

const Accordion = () => {
  return (
    <div className="container-fluid bg-black text-center">
      {/* Section Heading */}
      <h3 className="p-5 text-light fw-bold fs-2">
        Frequently Asked Questions
      </h3>

      {/* Accordion Section */}
      <div
        className="accordion accordion-flush bg-dark text-light p-5 w-75 mx-auto rounded-3"
        id="accordionFlushExample"
      >
        {/* Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-dark text-light fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is Netflix?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body bg-dark text-light fs-6 py-3">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more –
              on thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-dark text-light fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              How much does Netflix cost?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body bg-dark text-light fs-6 py-3">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              <strong> ₹149 to ₹649 a month</strong>. No extra costs, no
              contracts.
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-dark text-light fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Where can I watch?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body bg-dark text-light fs-6 py-3">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at{" "}
              <a
                href="https://www.netflix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-info text-decoration-none"
              >
                netflix.com
              </a>{" "}
              from your personal computer or on any internet-connected device
              that offers the Netflix app, including smart TVs, smartphones,
              tablets, streaming media players, and game consoles.
              <br />
              <br />
              You can also download your favourite shows with the iOS or Android
              app. Use downloads to watch while you're on the go and without an
              internet connection. Take Netflix with you anywhere.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

