import { FunctionComponent } from "react";
import { EMAIL_ADDRESS } from "../constants";
import ContactIcons from "./ContactIcons";
import NewsletterSubscribe from "./NewsletterSubscribe";

const Footer: FunctionComponent = () => {
  return (
    <>
      <footer>
        <div className="row">
          <div id="social-icons" className="large-3 medium-3 small-12 column">
            <ContactIcons />
          </div>
          <div className="large-6 medium-5 small-12 column">
            <NewsletterSubscribe />
          </div>
          <div className="large-3 medium-3 small-12 column text-right">
            <a target="_blank" href={EMAIL_ADDRESS}>&copy; Lindsay Foley</a>
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
        footer a { 
          display: inline-block;
          margin-top: 45px;
          font-size: 15px; 
          color: #9E9E9E; 
        }
        @media screen and (max-width: 960px) {
          footer a { 
            margin-top: 0;
          }
        }
      `}</style>
    </>
  )
}

export default Footer;