import React from "react";

import styled from "styled-components";

const HeaderButtonContainer = styled.button`
  border: 3px solid #fca311;
  border-radius: 10px;
  background-color: #14213d;
  color: #fca311;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 0.5rem 1rem;
  margin: 0px 10px;
  cursor: pointer;
`;

function HeaderButton({ text }) {
  return (
    <div>
      <HeaderButtonContainer>{text}</HeaderButtonContainer>
    </div>
  );
}

export default HeaderButton;
