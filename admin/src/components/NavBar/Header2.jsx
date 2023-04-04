import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Header2 = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click); /* on clicking hamburger will show the menu  */
    setExpanded(!expanded);
  };

  const [color, setColor] = useState(false);
  const [expanded, setExpanded] = useState(false);
   const changeColor = () => {
    if (window.scrolly >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className="header-top-strip  ">
        <div className="container-xxl ">
          <div className="row nav_row ">
            <div className="logo ">
              <div className="menu-bottom d-flex ">
                <a className="navbar-brand d-flex" href="/">
                  <img
                    src="/images/logo-nitp.png"
                    className="img-nitp d-flex "
                    alt=""
                  />
                  <div className="alum_head">
                  <p>
                    <span className=" texts fw-bold">
                      {" "}
                      Alumni Association
                    </span>
                    <br />
                    <span className=" texts1"> NIT Patna-Your home,forever</span>
                  </p>
                  </div>
                </a>
              </div>
            </div>

            <div className={`mobile_nav ${expanded ? "expanded" : ""}`}>
              <div className="nav d-flex d-block me-auto gap-15">
                {/* <li className="nav-item active">
                  <a className="nav-link text-white" href="/">
                    Home
                  </a>
                </li> */}

                <div className="dropdown  ">
                  {/* <button
                    type="button"
                    className="btn btn-warning "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > */}
                  <li>
                    <a href="/" className="text-black ">
                      Home
                    </a>
                  </li>
                  {/* </button> */}
                </div>

                <div className="dropdown ">
                  {/* <button
                    type="button"
                    className="btn btn-warning "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > */}
                  <li>
                    <Link className="text-black " to="#">
                      About
                    </Link>
                  </li>
                  {/* </button> */}
                </div>

                <div className="dropdown ">
                  {/* <button
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > */}
                  <li
                    // className="dropdown-toggle text-white"
                    // data-bs-toggle="dropdown"
                  >
                    <Link className="text-black " to="#">
                      Alumni-Corner
                    </Link>
                  </li>
                  {/* </button> */}
                  {/* <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Log In
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        News
                      </a>
                    </li>
                  </ul> */}
                </div>

                <div className="dropdown ">
                  {/* <button
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > */}
                  <li
                    // className="dropdown-toggle text-white"
                    // data-bs-toggle="dropdown"
                  >
                   <Link className="text-black " to="#">
                      Alumni-Student Relations
                    </Link>
                  </li>
                  {/* </button> */}
                  {/* <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item text-white " href="#">
                        Upcoming Reunions
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Reunion 22-23
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Past Reunion
                      </a>
                    </li>
                  </ul> */}
                </div>

                <div className="dropdown ">
                  {/* <button
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > */}
                  <li
                    // className="dropdown-toggle text-white"
                    // data-bs-toggle="dropdown"
                  >
                    <Link className="text-black" to="#">
                      Donate
                    </Link>
                  </li>
                  {/* </button> */}
                  {/* <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item text-white " href="#">
                        Why Give
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Causes to Donate
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Ways of Giving
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Power of Your Gifts
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="dropdown">
                <li>
                    <Link className="text-black " to="#">
                      Events
                    </Link>
                  </li>
                </div>
                <div className="dropdown">
                <li>
                    <Link className="text-black " to="#">
                      Resources
                    </Link>
                  </li>
                </div>
                <div className="dropdown">
                <li>
                    <Link className="text-black " to="#">
                      Team
                    </Link>
                  </li>
                </div>
              </div>
            </div>

            <div className="hamburger" onClick={handleClick}>
              {click ? (
                <FaTimes size={20} style={{ color: "black" }} />
              ) : (
                <FaBars size={20} style={{ color: "black" }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
