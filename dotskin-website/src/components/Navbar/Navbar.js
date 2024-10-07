// Navbar component: Client rendered
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./Navbar.css";
import "./hamburgerMenu.css";

const DesktopNav = () => {
  return (
    <div>
      <div className="DesktopNavContainer">
        <div className="dNavLogo"></div>

        <div className="dNavItems">
          <button className="NavLeftBtn">
            <div className="navCartIcon">
              <div className="navStatusIcon">9</div>
            </div>
          </button>
          <button className="NavLeftBtn">
            <div className="navBellIcon">
              <div className="navStatusIcon">9</div>
            </div>
          </button>
          <div className="navUserProfile ml-5 mr-5">
            <div className="navUserProfileLeft mr-3"></div>
            <div className="navUserProfileRight">
              <h6>Hi Ruan</h6>
              <h6>Your account</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="dNavLinks">
        <ul className="flex justify-center items-center">
          <li className="navitem">home</li>
          <li>
            <div className="navDot"></div>
          </li>
          <li className="navitem">shop</li>
          <li>
            <div className="navDot"></div>
          </li>
          <li className="navitem">about</li>
          <li>
            <div className="navDot"></div>
          </li>
          <li className="navitem">.skin analysis</li>
          <li>
            <div className="navDot"></div>
          </li>
          <li className="navitem">testimonials</li>
        </ul>
      </div>
    </div>
  );
};

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className="MobileNavContainer">
        <div className="mNavLogo"></div>
        <div className="mNavRight">
          <button className="NavLeftBtn m-2">
            <div className="navCartIcon">
              <div className="navStatusIcon">9</div>
            </div>
          </button>
          <div className="hamburgerMenuBtn m-2">
            <svg
              className={`ham hamRotate ham8 ${isActive ? "active" : ""}`}
              viewBox="0 0 100 100"
              width="80"
              onClick={toggleActive}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
              />
              <path className="line middle" d="m 30,50 h 40" />
              <path
                className="line bottom"
                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={`mHamburgerMenu ${isActive ? "active" : ""}`}>
        <div className="mNavs">
          <ul className="mobileNavs">
            <li className="navitem mNavItem">home</li>
            <li className="navitem mNavItem">shop</li>
            <li className="navitem mNavItem">about</li>
            <li className="navitem mNavItem">.skin analysis</li>
            <li className="navitem mNavItem">testimonials</li>
          </ul>
        </div>
        <div className="mBottom m-3">
          <div className="navUserProfile">
            <div className="navUserProfileLeft mr-3"></div>
            <div className="navUserProfileRight">
              <h6>Hi Ruan</h6>
              <h6>Your account</h6>
            </div>
          </div>
          <button className="NavLeftBtn">
            <div className="navBellIcon">
              <div className="navStatusIcon">9</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="NavbarBody">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  );
}
