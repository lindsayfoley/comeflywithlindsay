import type { AppProps } from 'next/app'
import { FunctionComponent } from "react";
import Layout from "../components/Layout";

interface IAppProps {
  Component: React.ComponentType;
  pageProps: Object;
}

const App: FunctionComponent<IAppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout
      pageTitle="Welcome to my Travel Blog | Come Fly With Lindsay"
      description="I have been documenting my travel adventures to give you an insight into the destinations I visit, covering where to stay, where to eat and what to see."
      ogTitle="Welcome to my Travel Blog"
      ogImage="/images/vancouver/cycling-around-stanley-park-in-vancouver.jpg"
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;