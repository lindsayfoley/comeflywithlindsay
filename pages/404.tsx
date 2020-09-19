import { FunctionComponent } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const ErrorPage: FunctionComponent = () =>
  <Layout
    pageTitle="Contact me | Come Fly With Lindsay"
    description="Got a travel related question or want to find out more about Come Fly With Lindsay? Follow me on Instagram, Facebook or send me an email."
    ogTitle="Contact Come Fly With Lindsay"
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

export default ErrorPage;