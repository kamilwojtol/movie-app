import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-color: #14213d;
`;

const HomeTitle = styled.h1`
  font-family: "Arvo", serif;
  font-size: 4rem;
  color: #fca311;
`;

const HomeWrapper = styled.div`
  margin: 1rem;
`;

const HomeText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HomeSubtitle = styled.h3`
  font-size: 2rem;
  color: #fca311;
  font-family: "Lato", sans-serif;
  font-weight: 400;
`;

export default function Home() {
  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeText>
          <HomeTitle>
            Say hello to <span className="home-title-accent">MovieApp</span>
          </HomeTitle>
          <HomeSubtitle>
            The best movie website on the entire internet!
          </HomeSubtitle>
        </HomeText>
      </HomeWrapper>
    </HomeContainer>
  );
}
