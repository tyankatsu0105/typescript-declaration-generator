import * as React from 'react';
import styled from 'styled-components';

// ===============================
// types
// ===============================

// ===============================
// component
// ===============================
export const Component = (): React.ReactElement => {
  return <TextArea disabled>aaaa</TextArea>;
};

// ===============================
// styles
// ===============================

const TextArea = styled.textarea`
  resize: none;
  border: 1px solid #fff;
  font-size: 1rem;
  padding: ${(props) => props.theme.space(2)}px;
  border-radius: 4px;
`;
