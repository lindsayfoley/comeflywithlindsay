import { FunctionComponent } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const ErrorPage: FunctionComponent = () => (
  <>
    <Layout
      pageTitle="Page Not Found | Come Fly With Lindsay"
      description="Sorry, the page you're looking for isn't here. Explore travel guides, tips, and inspiration to plan your next adventure with Come Fly with Lindsay"
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
        background-color: #f3f3f3;
        padding: 40px 0 60px 0;
      }
    `}</style>
  </>
);

export default ErrorPage;
