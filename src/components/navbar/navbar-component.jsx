import Image from "next/image";
import React from "react";

import { appleImg, searchImg, bagImg } from "../../utils/";
import { Header, Nav, NavContent, NavItem, SearchBagContainer } from "./navbar-styles";

import { navLists } from "../../constants";

const Navbar = () => {
  return (
    <Header>
      <Nav>
        {/* Logo */}
        <Image src={appleImg} alt='Apple Logo' width={18} height={18} />

        {/* Nav Content */}
        <NavContent>
          {navLists.map((nav, i) => (
            <NavItem key={nav}>{nav}</NavItem>
          ))}
        </NavContent>

        <SearchBagContainer>
          {/* Search Image */}
          <Image src={searchImg} alt='Search' width={18} height={18} />
          
          {/* Bag Image */}
          <Image src={bagImg} alt='bag' width={18} height={18} />
        </SearchBagContainer>
      </Nav>
    </Header>
  );
};

export default Navbar;
