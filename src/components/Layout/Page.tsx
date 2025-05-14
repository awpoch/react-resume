import { NextPage } from "next";
import Head from "next/head";
import { memo, PropsWithChildren } from "react";

import { HomepageMeta } from "../../data/types";

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(
  ({ children, title, description }) => {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta content={description} name="description" />

          {/* Open Graph : https://ogp.me/ */}
          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
        </Head>
        {children}
      </>
    );
  },
);

Page.displayName = "Page";
export default Page;
