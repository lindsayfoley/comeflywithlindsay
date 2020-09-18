import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <>
      <footer>
        <div className="row">
          <div className="large-3 medium-3 small-12 column">
            <a target="_blank" href="//instagram.com/comeflywithlindsay"></a>
            <a target="_blank" href="//www.pinterest.co.uk/comeflywithlindsay"></a>
          </div>
          <div className="large-3 medium-3 small-12 column">
            <a target="_blank" href="https://www.lindsayfoley.co.uk">&copy; Lindsay Foley</a>
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer { 
          clear: both;
          background: #222222; 
          border-top: 5px solid black; 
          padding: 15px 0 30px 0; 
        }
        footer svg { 
          width: 24px; 
          height: 24px; 
          fill: white; 
        }
        footer svg:first-child { 
          margin-right: 10px; 
        }
        footer a { 
          font-size: 15px; 
          color: #9E9E9E; 
        }
        footer svg, footer .row > div { 
          vertical-align: bottom; 
        }
        footer .row { 
          width: 100%; 
          display: 
          table!important; 
        }
        footer .row > div { 
          display: table-cell!important; 
        }
      `}</style>
    </>
  )
}

export default Footer;