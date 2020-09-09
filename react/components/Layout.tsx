import { FunctionComponent } from "react";
import Head from "next/head";
import Header from "./Header";

interface ILayoutProps {
  children: JSX.Element;
  pageTitle: string;
  description: string;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children, pageTitle, description }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <Header />
        <div className="content">{children}</div>
      </main>
    </>
  );
}

export default Layout;
