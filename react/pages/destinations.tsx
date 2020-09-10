import { posts } from "../allBlogPosts";
import { PostPreview } from "../components/PostPreview";

const Destinations = () => {
  return (
    <>
      {posts.map(post => (
        <PostPreview key={post.link} post={post} />
      ))}
    </>
  );
}

export default Destinations; 