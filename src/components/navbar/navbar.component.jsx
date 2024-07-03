"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { appleImg, searchImg, bagImg } from "../../utils/";
import {
  CloseButtonContainer,
  Header,
  MobileNav,
  MobileNavContent,
  Nav,
  NavContent,
  NavItem,
  SearchBagContainer,
} from "./navbar.styles";

import { navLists } from "../../constants";

import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  // Mobile Nav State
  const [showMobileNav, setShowMobileNav] = useState(false);

  // Handle Mobile Nav State
  const handleMobileNav = () => {
    setShowMobileNav((prev) => !prev);
  };

  // Document Body State
  useEffect(() => {
      const docBody = document.body;

      if (showMobileNav) {
        docBody.classList.add("no-scroll");
      } else {
        docBody.classList.remove("no-scroll");
      }

      // Cleanup function
      return () => {
        docBody.classList.remove("no-scroll");
      };
  }, [showMobileNav]);

  // Animate Mobile Nav
  useGSAP(() => {
    if (showMobileNav) {
      gsap.to(
        "#mobile-nav",

        {
          opacity: 1,
          display: "block",
          x: "0vw",
          duration: 1,
          ease: "power3.inOut",
        }
      );
    } else {
      gsap.to("#mobile-nav", {
        x: "100vw",
        opacity: 0,
        display: "none",
        duration: 1,
        ease: "power3.inOut",
      });
    }
  }, [showMobileNav]);

  return (
    <Header>
      <Nav>
        {/* Logo */}
        <Image src={appleImg} alt="Apple Logo" width={18} height={18} />

        {/* Nav Content */}
        <NavContent>
          {navLists.map((nav, i) => (
            <NavItem key={nav}>{nav}</NavItem>
          ))}
        </NavContent>

        <SearchBagContainer>
          {/* Search Image */}
          <Image
            src={searchImg}
            alt="Search"
            width={18}
            height={18}
            className="cursor-pointer"
          />

          {/* Bag Image */}
          <Image
            src={bagImg}
            alt="bag"
            width={18}
            height={18}
            className="cursor-pointer"
          />

          {/* Hamburger Menu */}
          <RiMenu3Line
            size={28}
            className="cursor-pointer md:hidden"
            onClick={handleMobileNav}
          />
        </SearchBagContainer>
      </Nav>

      {/* Mobile Nav */}
      <MobileNav id="mobile-nav">
        <CloseButtonContainer>
          <RiCloseFill
            size={28}
            className="z-10 border cursor-pointer"
            onClick={handleMobileNav}
          />
        </CloseButtonContainer>

        <MobileNavContent>
          {navLists.map((nav, i) => (
            <NavItem key={nav} className="text-3xl">
              {nav}
            </NavItem>
          ))}
        </MobileNavContent>
      </MobileNav>
    </Header>
  );
};

export default Navbar;
