import { FC } from 'react'
import BlogPostExcerpt, { IBlogPostDetails } from './BlogPostExcerpt'
import { IBlogPostProps } from './BlogPost';
interface IPostDetails extends IBlogPostProps {
  details: IBlogPostDetails;
}

interface IPostProps {
  link: string;
  module: IPostDetails;
}

interface IPostPreviewProps {
  post: IPostProps;
}

export const PostPreview: FC<IPostPreviewProps> = ({ post }) => {
  const { module: { details } } = post

  return (
    <>
      <article className="row">
        <BlogPostExcerpt details={details} />
      </article>
      <hr />
      <style jsx>{`
        article {
          clear: both;
          display: block;
        }
        hr:last-of-type {
          display: none;
        }
      `}</style>
    </>
  )
}
