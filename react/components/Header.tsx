import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header>
        <menu className="top-bar">
          <div className="row">
            <div className="large-12 medium-12 column">
              <a href="/"><img id="logo" src="/images/logo.png" alt="Come fly with Lindsay logo" /></a>
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
          padding: 15px 0; 
          background-color: white; 
          font-family:'Roboto Condensed', sans-serif; 
        }
        main > div:not(#searchWidget) { 
          margin-top: 30px; 
          overflow: auto; 
        }
        #logo { 
          max-width: 100px; 
          max-height: 100px; 
        }
        @media all and (min-width: 668px) {
          menu { 
            position: absolute; 
            top: 0; 
            left: 0; 
            width: 100%; 
            box-shadow: 0px 3px 15px rgba(0,0,0,0.2); 
          }
          .hamburger-container { 
            display: none; 
          }
          nav li:not(:first-of-type):after { 
            content: '•'; 
            color: #CBCBCB; 
            position: absolute; 
            top: 7px; 
            left: -5px; 
          }
          nav li a { 
            border-bottom: 4px solid transparent; 
          }
          nav a:hover { 
            border-color: #e6e6e6; 
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
