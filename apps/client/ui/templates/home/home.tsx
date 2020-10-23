import * as React from 'react';
import styled from 'styled-components';

import * as Componets from '~client/ui/components';

// ===============================
// types
// ===============================

// ===============================
// component
// ===============================
export const Component = (props): React.ReactElement => {
  return (
    <Wrap>
      <Componets.Input.Component />
      <Componets.Result.Component />
    </Wrap>
  );
};

// ===============================
// styles
// ===============================

const Wrap = styled.main`
  display: grid;

  grid-template-areas: 'input result';

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;
