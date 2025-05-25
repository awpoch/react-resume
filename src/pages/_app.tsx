import "tailwindcss/tailwind.css";
import "../globalStyles.scss";
import "../textTiers.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { JSX, memo } from "react";

const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element => {
  return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</>
  );
});

export default MyApp;
