import { FunctionComponent } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const ErrorPage: FunctionComponent = () =>
  <>
    <Layout
      pageTitle="Page not found | Come Fly With Lindsay"
      description="I have been documenting my travel adventures to give you an insight into the destinations I visit, covering where to stay, where to eat and what to see."
      ogTitle="Page not found on Come Fly With Lindsay"
      ogImage="/images/me-at-rainbow-falls-in-whistler-canada.jpg"
    >
      <section>
        <main className="row">
          <div className="large-12 column">
            <article>
              <div className="row">
                <div className="large-6 column">
                  <h1>Sorry, that page doesn't exist!</h1>
                  <p>Where would you like to go next?</p>
                  <p>
                    <Link href="/">
                      <a className="button small">Home</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="/about">
                      <a className="button small">Get In Touch</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="/destinations">
                      <a className="button small">Browse Destinations</a>
                    </Link>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </main>
      </section>
    </Layout>
    <style jsx>{`
      section {
        background-color: #F3F3F3;
        padding: 40px 0 60px 0;
      }
    `}</style>
  </>

export default ErrorPage;