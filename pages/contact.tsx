import { FunctionComponent } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import {
  COME_FLY_WITH_LINDSAY_INSTAGRAM,
  COME_FLY_WITH_LINDSAY_PINTEREST,
  COME_FLY_WITH_LINDSAY_FACEBOOK,
  PORTFOLIO_SITE,
  EMAIL_ADDRESS,
} from "../constants";

const ContactPage: FunctionComponent = () => {
  return (
    <>
      <Layout
        pageTitle="Contact Me for Travel Tips & Collaborations | Come Fly with Lindsay"
        description="Get in touch with Come Fly with Lindsay for travel enquiries, collaboration opportunities, or questions about my guides, adventures, and destination tips"
        ogTitle="Contact Come Fly With Lindsay"
        ogImage="/images/me-at-rainbow-falls-in-whistler-canada.jpg"
      >
        <section>
          <main className="row">
            <div className="large-12 column">
              <div className="row">
                <div className="large-6 column">
                  <img
                    src="images/me-at-rainbow-falls-in-whistler-canada.jpg"
                    alt="Me looking at Rainbow Falls in Whistler - British Columbia, Canada"
                  />
                </div>
                <div className="large-6 column">
                  <h1>Track Me Down</h1>
                  <p>
                    I'm always happy to receive feedback or have a chat about
                    travelling so get in touch via any of the ways below!
                  </p>
                  <ul>
                    <li>
                      Follow me on{" "}
                      <a target="_blank" href={COME_FLY_WITH_LINDSAY_INSTAGRAM}>
                        Instagram
                      </a>
                    </li>
                    <li>
                      Follow me on{" "}
                      <a target="_blank" href={COME_FLY_WITH_LINDSAY_PINTEREST}>
                        Pinterest
                      </a>
                    </li>
                    <li>
                      Follow me on{" "}
                      <a target="_blank" href={COME_FLY_WITH_LINDSAY_FACEBOOK}>
                        Facebook
                      </a>
                    </li>
                    <li>
                      Send me an <a href={EMAIL_ADDRESS}> email</a>
                    </li>
                    <li>
                      View my{" "}
                      <a target="_blank" href={PORTFOLIO_SITE}>
                        portfolio
                      </a>
                    </li>
                  </ul>
                  <Link href="destinations">
                    <a className="button small">Browse Destinations</a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </section>
      </Layout>
      <style jsx>{`
        section {
          background-color: #f3f3f3;
          padding: 40px 0 60px 0;
        }
        h1 {
          display: inline-block;
          border-bottom: 2px solid #f7b044;
        }
        ul {
          color: #4e4d4d;
        }
        @media all and (max-width: 1024px) {
          img {
            padding-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;
