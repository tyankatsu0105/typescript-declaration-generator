import * as React from 'react';
import styled from 'styled-components';

// ===============================
// types
// ===============================

// ===============================
// component
// ===============================
export const Component = (): React.ReactElement => {
  return (
    <Header>
      <Heading>TypeScript Declaration Generator</Heading>
      <GitHubLink
        href="https://github.com/tyankatsu0105/typescript-declaration-generator"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </GitHubLink>
    </Header>
  );
};

// ===============================
// styles
// ===============================

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.space(2)}px;
`;
const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;
const GitHubLink = styled.a``;
