import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          fcm_service_path="/firebase-messaging-sw.js"
          src="https://sdk.smartdx.co/handlers/2bdae61e_7d8c_432b_9815_ac4d1c8c82e2.sdk"
          defer="defer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
