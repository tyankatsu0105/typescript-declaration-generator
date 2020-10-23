import * as React from 'react';

import * as Presenter from './input.presenter';

// ===============================
// types
// ===============================

// ===============================
// component
// ===============================
export const Component = (props): React.ReactElement => {
  const [value, setValue] = React.useState('');

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    },
    []
  );

  return <Presenter.Component handleChange={handleChange} />;
};
