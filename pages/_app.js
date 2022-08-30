import Head from 'next/head';
import React from 'react';

// TODO: remove globl style?
import '../styles/global.css';
import 'semantic-ui-css/semantic.min.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="inspiration-generator" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
