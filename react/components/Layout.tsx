import { FunctionComponent } from "react";
import Head from "next/head";
import Header from "./Header";
import { Settings } from "http2";

interface ILayoutProps {
  children: Object;
  pageTitle: string;
  description: string;
  ogTitle?: string;
  ogImage?: string;
}

const Layout: FunctionComponent<ILayoutProps> = ({
  children,
  pageTitle,
  description,
  ogImage
}) => {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Lindsay Foley" />
        <meta name="Description" content={description} />
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:type" content="blog" />
        <meta property="article:author" content="Come Fly With Lindsay" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="icon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="icon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="icon.png" />
        <link href="//fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" />
      </Head>
      <main>
        <Header />
        <div className="content">{children}</div>
      </main>
    </>
  );
}

export default Layout;
