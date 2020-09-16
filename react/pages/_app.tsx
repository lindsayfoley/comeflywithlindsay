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
      <style jsx>{`
        body {
          min-width: 320px; 
          font-family: 'PT Sans', sans-serif; 
        }
        h1, 
        h2, 
        h3, 
        h4, 
        h5 { 
          color:black; 
        }
        section { 
          background: #F3F3F3; 
        }
        section a { 
          color: #4e4d4d; 
        }
        section a:hover { 
          color:#FFB647; 
        }
        main { 
          padding-bottom: 20px; 
        }
        article h1, 
        article h2, 
        article h3 { 
          margin-bottom: 10px; 
          width: fit-content; 
          width: -moz-fit-content; 
        } 
        article h1, 
        article h2 { 
          border-bottom: 2px solid #F7B044; 
        }
        article h3 { 
          border-bottom: 2px solid rgba(247, 176, 68, 0.5); 
        } 
        article .row { 
          padding: 10px 0; 
        }
        article .row:last-of-type { 
          padding-bottom: 40px; 
        }
        article img { 
          width: 100%; 
          display: block; 
          margin: 0 auto; 
        }
        body:not(#blog-post) article img { 
          max-width: 637px; 
        }
        article h2 + p {
          margin-top: 0; 
        }
        #intro { 
          text-align: center; 
          font-size: 18px; 
        }
        section hr { 
          border-bottom-color: #dfdfdf; 
        }
        section h4 { 
          margin: 0; 
        }
        section p, 
        section ul { 
          color: #6b6a6a; 
        }
        body:not(#blog-post) figcaption { 
          margin-top: 10px; 
        }
        figcaption { 
          color: #c98f38; 
        }
        .crossed-out { 
          text-decoration: line-through; 
        }
        .video-container { 
          position: relative; 
          height: 0; 
          overflow: hidden; 
          padding-bottom: 56.25%; 
        }
        .video-container iframe { 
          position: absolute; 
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%; 
        }
      `}</style>
    </>
  );
}

export default App;