import React from 'react'

import styled from 'styled-components'

const SocialWorkingTitle = styled.h1`
  font-size: 48px;
  font-family: 'Poppins', sans-serif;
  color: #fca311;
`;

const SocialContainer = styled.div`
  height: calc(100vh - 79px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Social() {
  return (
    <SocialContainer>
      <SocialWorkingTitle>Building... 🔨</SocialWorkingTitle>
    </SocialContainer>
  )
}
