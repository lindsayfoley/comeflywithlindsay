import { FunctionComponent, useState } from "react";
import { NEWSLETTER_SUBSCRIBE_URL } from "../constants";

interface INewsletterSubscribeState {
  emailAddress: string;
}

const NewsletterSubscribe: FunctionComponent = () => {

  const [email, setEmailAddress] = useState<INewsletterSubscribeState>({ emailAddress: '' });

  return (
    <>
      <div id="mc_embed_signup">
        <form
          action={NEWSLETTER_SUBSCRIBE_URL}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate" target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">Get notified about new guides:</label>
            <input
              type="email"
              value={email.emailAddress}
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="Email address"
              required
              onChange={e => {
                const newEmailAddress = { emailAddress: e.target.value };
                setEmailAddress(newEmailAddress);
              }}
            >
            </input>
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            >
            </input>
          </div>
        </form>
      </div>
      <style jsx>{`
        #mc_embed_signup { 
          text-align: center; 
        }
        label { 
          color: white; 
          font-weight: bold; 
          padding-bottom: 10px; 
          display: block!important; 
        }	
        input { 
          height: 30px;
          vertical-align: bottom;
        }
        #mce-EMAIL {
          max-width: 250px;
          width: 100%;
        }
        #mc-embedded-subscribe { 
          margin-left: 2px; 
          font-weight: bold;
          padding: 0.5rem; 
        }
        @media all and (max-width: 667px) {
          #mce-EMAIL {
            width: 65%;
          }
        }
    `}</style>
    </>
  )
}

export default NewsletterSubscribe;