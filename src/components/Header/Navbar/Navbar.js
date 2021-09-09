import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const NavbarComponent = styled.div``;
const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: space-around;
  list-style-type: none;
`;
const NavbarItem = styled.li``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fca311;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  margin: 0 15px;
`;

function Navbar() {
  return (
    <NavbarComponent>
      <NavbarList>
        <NavbarItem>
          <StyledLink to="/">Home</StyledLink>
        </NavbarItem>
        <li>
          <StyledLink to="/films">Films</StyledLink>
        </li>
        <li>
          <StyledLink to="/social">Social</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
      </NavbarList>
    </NavbarComponent>
  );
}

export default Navbar;
