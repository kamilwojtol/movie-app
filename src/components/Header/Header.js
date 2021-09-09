import React from "react";
import Brand from "./Brand/Brand";
import Navbar from "./Navbar/Navbar";
import HeaderButtons from "./HeaderButtons/HeaderButtons";

import styled from "styled-components";

const HeaderComponent = styled.header`
  background-color: #14213d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export default function Header() {
  return (
    <HeaderComponent>
      <Brand />
      <Navbar />
      <HeaderButtons />
    </HeaderComponent>
  );
}
