import { FunctionComponent } from "react";
import Layout from "../components/Layout";
import { PostPreview } from "../components/PostPreview";
import { posts } from "../allBlogPosts";

const IndexPage: FunctionComponent = () => {
  return (
    <>
      <Layout
        pageTitle="Welcome to my Travel Blog | Come Fly With Lindsay"
        description="I have been documenting my travel adventures to give you an insight into the destinations I visit, covering where to stay, where to eat and what to see."
        ogTitle="Welcome to my Travel Blog"
        ogImage="/images/vancouver/cycling-around-stanley-park-in-vancouver.jpg"
      >
        <section>
          <div id="hero">
            <a href="destinations"><h1>Travel Inspiration &amp; Guides</h1></a>
          </div>
          <div id="purpose" className="text-center">
            <h2>Travelling The Globe One Step At A Time</h2>
            <p>With so many spectacular places to visit, I find the web inundated with travel advice websites, resources, reviews, etc. that can make the whole planning/booking process really stressful - especially with the fear of not picking the prime location or the right hotel!</p>
            <p>I decided to document my travels to give you an honest insight into where to go on holiday, advising on the good, the bad and the ugly. Let me be your travel <span className="crossed-out">guinea pig</span> guru and I'll tell you where I think is best to stay, what to see and what activities I recommend doing.</p>
            <a className="button small" href="/destinations">View All Holiday Guides</a>
          </div>
          <main className="row">
            <div className="large-12 column">
              <h2 className="text-center"><a href="destinations">Recent Holiday Guides</a></h2>
              {posts.filter((post, index) => (index <= 2) && post).map(post =>
                <PostPreview key={post.link} post={post} />
              )}
            </div>
          </main>
        </section>
      </Layout>
      <style jsx>{`
        section {
          background-color: #F3F3F3;
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
          content: '—';
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
        h1 { 
          position: absolute; 
          left: 0; 
          font-family: 'Satisfy', cursive; 
          text-align: center; 
          width: 100%; 
          color: white; 
          text-decoration: none; 
        }
        h2 {
          margin-bottom: 20px;
        }
        @media all and (min-width: 668px) {
          #hero { 
            background:url("/images/homepage/snowy-mountains-trees-banff-canada.jpg") no-repeat;
            background-position: center 70px; 
            background-size: cover; 
            padding: 320px 0; 
          }
          #purpose { 
            padding: 30px; 
          } 
          h1 { 
            top: 410px; 
            font-size: 65px; 
          }
        }
        @media all and (max-width: 667px) {
          h1 { 
            top: 153px; 
            font-size: 32px; 
            text-shadow: 0 0 black;
          }
         h2::before,
         h2::after {
          display: none;
         }
          #hero {
            background: url("/images/homepage/snowy-mountains-trees-banff-canada.jpg") no-repeat;
            background-size: cover;
            min-height: 180px;
         }
          #page-top {
            display: none;
            position: fixed;
            right: 20px;
            top: 73%;
            width: 70px;
            height: 70px;
            padding: 10px;
            text-align: center;
            text-decoration: none;
            background-color: rgba(37,33,29, 0.6);
            color: white;
            font-weight: bold;
            border-radius: 100%;
            box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
         }
          #purpose {
            padding: 30px 15px;
         }
          article li {
            padding-bottom: 15px;
         }
          #toTop {
            right: 20px;
            font-size: 25px;
            padding: 10px 10px;
          }
        }     
      `}</style>
    </>
  );
}

export default IndexPage;