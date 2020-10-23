import * as React from 'react';
import styled from 'styled-components';

// ===============================
// types
// ===============================
type Props = {
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

// ===============================
// component
// ===============================
export const Component = (props: Props): React.ReactElement => {
  return <TextArea onChange={props.handleChange}></TextArea>;
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
