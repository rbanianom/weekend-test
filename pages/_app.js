import Head from "next/head";
import "antd/dist/antd.min.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Stay active with a little workout teste"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <title>WEEKEND FROM HOME</title>
      </Head>
      <style global jsx>
        {`
          body {
            padding: 0;
            margin: 0;
            font-family: "Work Sans", sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          }
          .ant-layout-header {
            background: #ffffff;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
