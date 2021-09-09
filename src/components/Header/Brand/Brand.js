import React from "react";

import styled from "styled-components";

const Logo = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  color: #fca311;
  font-weight: 700;
  margin: 0px 10px;
`;

const LogoAccent = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  color: #e5e5e5;
  font-weight: 700;
`;

function Brand() {
  return (
    <div>
      <Logo>
        Movie<LogoAccent>App</LogoAccent>
      </Logo>
    </div>
  );
}

export default Brand;
