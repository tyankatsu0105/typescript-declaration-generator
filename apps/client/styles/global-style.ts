import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #333;
    color: #fff
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }
`;
