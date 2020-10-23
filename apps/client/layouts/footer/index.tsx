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
    <Footer>
      <Copyright>
        ©
        <a
          href="https://tyankatsu.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          tyankatsu
        </a>
      </Copyright>
    </Footer>
  );
};

// ===============================
// styles
// ===============================

const Footer = styled.footer`
  padding: ${(props) => props.theme.space(2)}px;
`;
const Copyright = styled.small`
  display: block;
  text-align: center;
`;
