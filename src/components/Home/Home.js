import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-color: #14213d;
  height: calc(100vh - 79px);
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HomeTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  color: #fca311;
`;

const TitleAccent = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: #e5e5e5;
`;

const HomeWrapper = styled.div`
  padding: 1rem;
`;

const HomeText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HomeSubtitle = styled.h3`
  font-size: 2rem;
  color: #e5e5e5;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export default function Home() {
  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeText>
          <HomeTitle>
            Say hello to Movie<TitleAccent>App</TitleAccent>
          </HomeTitle>
          <HomeSubtitle>
            The best movie website on the entire internet!
          </HomeSubtitle>
        </HomeText>
      </HomeWrapper>
    </HomeContainer>
  );
}
