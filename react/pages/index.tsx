import { PostPreview } from "../components/PostPreview";
import { FunctionComponent } from "react";
import { posts } from "../allBlogPosts";

const IndexPage: FunctionComponent = () => {
  return (
    <>
      {posts.filter((post, index) => (index <= 2) && post).map(post =>
        <PostPreview key={post.link} post={post} />
      )}
    </>
  );
}

export default IndexPage;