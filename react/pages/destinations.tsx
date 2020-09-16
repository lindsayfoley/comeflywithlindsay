import Layout from "../components/Layout";
import { posts } from "../allBlogPosts";
import { PostPreview } from "../components/PostPreview";

const Destinations = () => {
  return (
    <>
      <Layout
        pageTitle="Welcome to my Travel Blog | Come Fly With Lindsay"
        description="I have been documenting my travel adventures to give you an insight into the destinations I visit, covering where to stay, where to eat and what to see."
        ogTitle="Welcome to my Travel Blog"
        ogImage="/images/vancouver/cycling-around-stanley-park-in-vancouver.jpg"
      >
        <section>
          <div className="row text-center">
            <h1>Travel Guides to Destinations Around the World</h1>
            <p>I'm making my way through my travel bucket list and I'm taking you all with me!</p>
            <p>These travel guides will provide you with tips and advice on your upcoming holidays, as well as inspire you about some incredible destinations you may not have considered visiting.</p>
          </div>
          <hr />
          {posts.map(post =>
            <PostPreview key={post.link} post={post} />
          )}
        </section>
      </Layout>
      <style jsx>{`
        section {
          margin-top: 30px;
          padding-bottom: 60px;
        }
        p:last-of-type {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}

export default Destinations; 