import { FunctionComponent } from 'react'
import Link from 'next/link'
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

export const PostPreview: FunctionComponent<IPostPreviewProps> = ({ post }) => {
  const { link, module: { details } } = post

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
