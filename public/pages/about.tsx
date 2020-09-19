import { FunctionComponent } from "react";
import { PORTFOLIO_SITE } from "../constants";
import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage: FunctionComponent = () => {
  return (
    <>
      <Layout
        pageTitle="About the Author | Come Fly With Lindsay"
        description="I try to escape my hometown of London a few times a year to see what wondrous sites are out there for me to see and discover."
        ogTitle="About Lindsay Foley author of Come Fly With Lindsay"
        ogImage="/images/lindsay-foley-at-lake-louise-banff-canada.jpg"
      >
        <section>
          <main className="row">
            <div className="large-12 column">
              <div className="row">
                <div className="large-6 column">
                  <img src="images/lindsay-foley-at-lake-louise-banff-canada.jpg" alt="Me standing in front of the stunning Lake Louise in Banff - Alberta, Canada" />
                </div>
                <div className="large-6 column">
                  <h1>The Obligatory About Page</h1>
                  <p>I'm Lindsay and I love to travel! I try to escape London when I can to see what wondrous sites are out there for me to discover.</p>
                  <p>My day job is a <a href={PORTFOLIO_SITE} target="_blank">Web Developer</a> which has been priceless in creating and designing this site and allowing me to flex some skills! I intend to travel a LOT and utilise my creative and dev skills to create these travel guides featuring cool photography <span className="crossed-out">mainly of food I eat, mostly burgers</span> along the way.</p>
                  <p>Shout-out to <a href="https://hannahswancott.co.uk/" target="_blank">Hannah Swancott</a> for inspiring me to start this site (blame her for my ramblings)! So take a look around and get in touch if you have any questions about my travels/me!</p>
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
        @media all and (max-width: 1024px) {
          img {
            padding-bottom: 20px;
          }
        }
        `}</style>
    </>
  );
}

export default AboutPage;