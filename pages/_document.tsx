import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="icon" href="/egg.png" />     
        </Head>
        <body style={{ fontFamily: 'Manrope' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}