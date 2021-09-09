import React from "react";
import HeaderButton from "./HeaderButton/HeaderButton";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

function HeaderButtons() {
  return (
    <Container>
      <HeaderButton text="Log in" />
      <HeaderButton text="Sign up" />
    </Container>
  );
}

export default HeaderButtons;
