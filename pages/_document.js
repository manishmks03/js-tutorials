import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />

          {/* <!-- Compiled and minified CSS --> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
