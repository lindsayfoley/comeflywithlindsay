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
        {posts.map(post => (
          <PostPreview key={post.link} post={post} />
        ))}
      </Layout>
    </>
  );
}

export default Destinations; 