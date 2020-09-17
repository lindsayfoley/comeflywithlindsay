import Nav from "./Nav";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <menu className="top-bar">
          <div className="row">
            <div className="large-12 medium-12 column">
              <Link href="/">
                <a>
                  <img id="logo" src="/images/logo.png" alt="Come fly with Lindsay logo" />
                </a>
              </Link>
            </div>
            <Nav />
          </div>
        </menu>
      </header>
      <style jsx>{`
        header { 
          text-align: center; 
          position: relative; 
        }
        menu { 
          margin: 0;
          padding: 15px 0; 
          background-color: white; 
          font-family:'Roboto Condensed', sans-serif; 
        }
        #logo { 
          max-width: 100px; 
          max-height: 100px; 
        }
        @media all and (min-width: 668px) {
          menu { 
            box-shadow: 0px 3px 15px rgba(0,0,0,0.2); 
          }
          header { 
            border-top: 20px solid #262626; 
          }
        }
        @media all and (max-width: 667px) {
          header {
            border-top: 5px solid #262626;
         }
          #logo {
             max-width: 100px;
         }
        }
      `}</style>
    </>
  );
}
