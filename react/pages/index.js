import { PostPreview } from "../components/PostPreview";
import { posts } from "../allBlogPosts";

export default function IndexPage() {
  return (
    <>
      {posts.map(post => (
        <PostPreview key={post.link} post={post} />
      ))}
    </>
  );
}
