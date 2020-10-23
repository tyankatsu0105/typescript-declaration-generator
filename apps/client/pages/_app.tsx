import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import { theme } from '~client/modules/theme';
import { GlobalStyle } from '~client/styles/global-style';

import * as Layouts from '~client/layouts';
import 'minireset.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>TypeScript Declaration Generator</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layouts.Container.Component>
          <Layouts.Header.Component />
          <Component {...pageProps} />
          <Layouts.Footer.Component />
        </Layouts.Container.Component>
      </ThemeProvider>
    </>
  );
};

export default CustomApp;
