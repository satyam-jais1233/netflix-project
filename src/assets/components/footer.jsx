import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-black text-light">
        <div className="container  py-5">
          <h>Questions? Call 000-800-919-1743</h>

          <div className="row py-5 ">
            {/* footer 1 */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="d-flex flex-column gap-2 ">
                <a
                  href="https://help.netflix.com/en/node/412 "
                  className="text-light"
                >
                  FAQ
                </a>
                <a
                  href="https://ir.netflix.net/ir-overview/profile/default.aspx"
                  className="text-light"
                >
                  Investor Relations
                </a>
                <a
                  href="https://help.netflix.com/legal/privacy"
                  className="text-light"
                >
                  privacy
                </a>
                <a href="https://fast.com/" className="text-light">
                  speet test
                </a>
              </div>
            </div>
            {/* footer 2 */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="d-flex flex-column gap-2 ">
                <a href="https://help.netflix.com/en" className="text-light">
                  help center
                </a>
                <a href="https://jobs.netflix.com/" className="text-light">
                  jobs
                </a>
                <a href="https://www.netflix.com/in/" className="text-light">
                  Cookie Preferences
                </a>
                <a
                  href="https://help.netflix.com/legal/notices"
                  className="text-light"
                >
                  legel notices
                </a>
              </div>
            </div>
            {/* footer 3 */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="d-flex flex-column gap-2 ">
                <a
                  href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount"
                  className="text-light"
                >
                  Account
                </a>
                <a
                  href="https://help.netflix.com/en/node/14361"
                  className="text-light"
                >
                  Ways to watch
                </a>
                <a
                  href="https://help.netflix.com/en/node/134094"
                  className="text-light"
                >
                  Corporate Information
                </a>
                <a
                  href="https://www.netflix.com/in/browse/genre/839338"
                  className="text-light"
                >
                  only to netflix
                </a>
              </div>
            </div>
            {/* footer 4 */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="d-flex flex-column gap-2 ">
                <a href="\https://media.netflix.com/en/" className="text-light">
                  media to center
                </a>

                <a
                  href="https://help.netflix.com/legal/termsofuse"
                  className="text-light"
                >
                  Terms of use
                </a>
                <a
                  href="https://help.netflix.com/en/contactus"
                  className="text-light"
                >
                  contactus
                </a>
              </div>
            </div>
          </div>


          <div className="py-5">
          <select className=" form-select-sm bg-dark text-light fw-bold">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <h>Netflix india</h>
        <h className="fw-light p-2">This page is protected by Google reCAPTCHA to ensure you're not  bot.</h>
         <a href="#">Learn more.</a>
        </div>
      </div>
    </>
  );
};
export default Footer;
