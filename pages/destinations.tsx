import Layout from "../components/Layout";
import { posts } from "../allBlogPosts";
import { PostPreview } from "../components/PostPreview";

const Destinations = () => {
  return (
    <>
      <Layout
        pageTitle="Unforgettable Destinations Worldwide | Come Fly with Lindsay"
        description="Discover curated travel guides to unforgettable destinations worldwide. From hidden gems to iconic landmarks, get inspired to explore with Come Fly with Lindsay"
        ogTitle="Welcome to my Travel Blog"
        ogImage="/images/vancouver/cycling-around-stanley-park-in-vancouver.jpg"
      >
        <section>
          <div className="row text-center">
            <h1>Travel Guides to Destinations Around the World</h1>
            <p>
              I'm making my way through my travel bucket list and I'm taking you
              all with me!
            </p>
            <p>
              These travel guides will provide you with tips and advice on your
              upcoming holidays, as well as inspire you about some incredible
              destinations you may not have considered visiting.
            </p>
          </div>
          <hr />
          {posts.map((post) => (
            <PostPreview key={post.link} post={post} />
          ))}
        </section>
      </Layout>
      <style jsx>{`
        section {
          background-color: #f3f3f3;
          padding: 30px 0 60px;
        }
        p:last-of-type {
          margin-bottom: 0;
        }
        @media all and (max-width: 667px) {
          h1 {
            padding: 0 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Destinations;
