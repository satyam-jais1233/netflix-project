import React from "react";
import logo from "../image/netflix.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const ClickHandler = () => {
    navigate("/login");
  };
  return (
    <header>
      <nav className="navbar px-5">
        <div className="container-fluid px-5 py-3  d-flex justify-content-between align-items-center ">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="logo"
              height="40"
            //   style={{ backgroundColor: "transparent" }}
            />
          </a>

          <div className="d-flex align-items-center  gap-2">
            <select className="form-select form-select-sm bg-dark text-light fw-bold">
              <option>English</option>
              <option>Hindi</option>
            </select>

            <button className="btn btn-danger btn-sm" onClick={ClickHandler}>
              Sign&nbsp;In
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
