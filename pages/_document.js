import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Paytone+One&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js;"/>
      </body>
    </Html>
  );
}
export default MyDocument;
