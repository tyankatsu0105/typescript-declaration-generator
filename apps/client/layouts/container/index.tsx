import * as React from 'react';
import styled from 'styled-components';

// ===============================
// types
// ===============================

// ===============================
// component
// ===============================
export const Component: React.FC = (props) => {
  return <Grid>{props.children}</Grid>;
};

// ===============================
// styles
// ===============================

const Grid = styled.div`
  display: grid;

  grid-template-areas:
    'header'
    'content'
    'footer';

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;

  height: 100vh;
`;
