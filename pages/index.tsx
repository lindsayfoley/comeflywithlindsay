import { FunctionComponent } from "react";
import Layout from "../components/Layout";
import { PostPreview } from "../components/PostPreview";
import { posts } from "../allBlogPosts";
import Link from "next/link";

const IndexPage: FunctionComponent = () => {
  return (
    <>
      <Layout
        pageTitle="Inspiring Travel Adventures Around the World | Come Fly with Lindsay"
        description="Join me on my travel adventures as I share insights into incredible destinations, from top places to stay and eat to famed attractions. Let’s explore together"
        ogTitle="Welcome to my Travel Blog"
        ogImage="/images/vancouver/cycling-around-stanley-park-in-vancouver.jpg"
      >
        <section>
          <div id="hero">
            <Link href="/destinations">
              <a>
                <h1>Travel Inspiration &amp; Guides</h1>
              </a>
            </Link>
          </div>
          <div id="purpose" className="text-center">
            <h2>Travelling The Globe One Step At A Time</h2>
            <p>
              With so many spectacular places to visit, I find the web inundated
              with travel advice websites, resources, reviews, etc. that can
              make the whole planning/booking process really stressful -
              especially with the fear of not picking the prime location or the
              right hotel!
            </p>
            <p>
              I decided to document my travels to give you an honest insight
              into where to go on holiday, advising on the good, the bad and the
              ugly. Let me be your travel{" "}
              <span className="crossed-out">guinea pig</span> guru and I'll tell
              you where I think is best to stay, what to see and what activities
              I recommend doing.
            </p>
            <Link href="/destinations">
              <a className="button small">View All Holiday Guides</a>
            </Link>
          </div>
          <main className="row">
            <div className="large-12 column">
              <h2 className="text-center">
                <Link href="/destinations">
                  <a>Recent Holiday Guides</a>
                </Link>
              </h2>
              {posts
                .filter((post) => post.module.details.excerpt.highlight)
                .map((post) => (
                  <PostPreview key={post.link} post={post} />
                ))}
            </div>
          </main>
        </section>
      </Layout>
      <style jsx>{`
        section {
          background-color: #f3f3f3;
        }
        #purpose {
          background: white;
        }
        #purpose * {
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }
        #purpose > h2:before,
        #purpose > h2:after {
          content: "—";
          padding: 0 5px;
        }
        #purpose p:last-of-type {
          margin-bottom: 0;
        }
        #purpose .button {
          margin-top: 20px;
        }
        #destinations article .large-9 {
          margin: 0 auto;
        }
        #destinations .wide {
          max-width: 750px;
          padding-bottom: 20px;
        }
        main {
          margin-top: 30px;
          padding-bottom: 60px;
        }
        #hero {
          position: relative;
        }
        h1 {
          position: absolute;
          left: 0;
          font-family: "Satisfy", cursive;
          text-align: center;
          width: 100%;
          color: white;
          text-decoration: none;
        }
        h2 {
          margin-bottom: 20px;
          border-bottom: 0;
        }
        @media all and (min-width: 668px) {
          #hero {
            background: url("/images/homepage/snowy-mountains-trees-banff-canada.jpg")
              no-repeat;
            background-position: center;
            background-size: cover;
            padding: 320px 0;
          }
          #purpose {
            padding: 30px;
          }
          h1 {
            top: 90px;
            font-size: 65px;
          }
        }
        @media all and (max-width: 667px) {
          h1 {
            top: 40px;
            font-size: 30px;
            text-shadow: 0 0 black;
          }
          #purpose h2 {
            padding: 0 35px;
          }
          h2::before,
          h2::after {
            display: none;
          }
          #hero {
            background: url("/images/homepage/snowy-mountains-trees-banff-canada.jpg")
              no-repeat;
            background-size: cover;
            min-height: 250px;
          }
          #purpose {
            padding: 30px 15px;
          }
        }
      `}</style>
    </>
  );
};

export default IndexPage;
