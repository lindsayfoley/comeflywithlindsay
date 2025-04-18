import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import Header from "./Header";
import Footer from "./Footer";
import { DOMAIN, FACEBOOK_APP_ID } from "../constants";

interface ILayoutProps {
  children: Object;
  pageTitle: string;
  description: string;
  ogTitle?: string;
  ogImage?: string;
  isIndexable?: boolean;
}

const Layout: FC<ILayoutProps> = ({
  children,
  pageTitle,
  description,
  ogImage,
  isIndexable = true,
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Lindsay Foley" />
        {!isIndexable && <meta name="robots" content="noindex, follow" />}
        <meta name="description" content={description} />
        <title>{pageTitle}</title>
        <meta property="fb:app_id" content={FACEBOOK_APP_ID} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:type" content="blog" />
        <meta property="article:author" content="Come Fly With Lindsay" />
        <link
          rel="canonical"
          href={`${DOMAIN}${router.asPath.split("?")[0]}`}
        />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="icon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="icon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="icon.png" />
        <link
          href="//fonts.googleapis.com/css?family=Roboto+Condensed"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Satisfy"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-109147525-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-109147525-1');`,
          }}
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
