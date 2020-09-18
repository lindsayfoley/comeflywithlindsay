import { FunctionComponent } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const ContactPage: FunctionComponent = () => {
  return (
    <>
      <Layout
        pageTitle="Contact me | Come Fly With Lindsay"
        description="Got a travel related question or want to find out more about Come Fly With Lindsay? Follow me on Instagram, Facebook or send me an email."
        ogTitle="Contact Come Fly With Lindsay"
        ogImage="/images/me-at-rainbow-falls-in-whistler-canada.jpg"
      >
        <section>
          <main className="row">
            <div className="large-12 column">
              <div className="row">
                <div className="large-6 column">
                  <img src="images/me-at-rainbow-falls-in-whistler-canada.jpg" alt="Me looking at Rainbow Falls in Whistler - British Columbia, Canada" />
                </div>
                <div className="large-6 column">
                  <h1>Track Me Down</h1>
                  <p>I'm always happy to receive feedback or have a chat about travelling so get in touch via any of the ways below!</p>
                  <ul>
                    <li>Follow me on <a target="_blank" href="https://www.instagram.com/comeflywithlindsay/">Instagram</a></li>
                    <li>Follow me on <a target="_blank" href="https://www.pinterest.co.uk/comeflywithlindsay/">Pinterest</a></li>
                    <li>Follow me on <a target="_blank" href="https://www.facebook.com/comeflywithlindsay/">Facebook</a></li>
                    <li>Send me an <a href="mailto:me@lindsayfoley.co.uk"> email</a></li>
                    <li>View my <a target="_blank" href="https://www.lindsayfoley.co.uk">portfolio</a></li>
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
          background-color: #F3F3F3;
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
}

export default ContactPage;