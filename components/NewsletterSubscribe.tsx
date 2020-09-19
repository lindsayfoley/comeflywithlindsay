import { FunctionComponent } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { NEWSLETTER_SUBSCRIBE_URL } from "../constants";

const NewsletterSubscribe: FunctionComponent = () =>
  <>
    <div id="newsletter-subscribe">
      <h5 className="text-center">Get notified about new guides:</h5>
      <MailchimpSubscribe url={NEWSLETTER_SUBSCRIBE_URL} />
    </div>
    <style jsx>{`
      h5 {
        color: white;
        margin-top: 0;
      }
    `}</style>
  </>

export default NewsletterSubscribe;
