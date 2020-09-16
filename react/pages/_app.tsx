import type { AppProps } from 'next/app'
import { FunctionComponent } from "react";
import "../styles/main.scss";

interface IAppProps {
  Component: React.ComponentType;
  pageProps: Object;
}

const App: FunctionComponent<IAppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;