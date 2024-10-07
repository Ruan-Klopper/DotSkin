"use client"; // Needed if using client-side interactivity

import React, { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

const DesktopNav = () => {
  return (
    <div className="DesktopNavContainer">
      <div className="dNavLogo"></div>
      <div className="dNavLinks"></div>
      <div className="dNavItems"></div>
    </div>
  );
};

const MobileNav = () => {
  return <div className="MobileNavContainer"></div>;
};

export default function Navbar() {
  return (
    <div className="NavbarBody">
      <DesktopNav />
    </div>
  );
}
